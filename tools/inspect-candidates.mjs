// 打印候选图的分类、描述与维基百科引用情况（带退避重试）
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('candidates.json', 'utf8'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const api = async params => {
  for (let a = 0; a < 5; a++) {
    try {
      const r = await fetch('https://commons.wikimedia.org/w/api.php?' + new URLSearchParams(params), { headers: { 'User-Agent': 'QinweiGraduationProject/1.0' } });
      const t = await r.text();
      if (r.status === 429 || t.startsWith('You are')) { await sleep(2500 * (a + 1)); continue; }
      return JSON.parse(t);
    } catch(e){ await sleep(2000 * (a + 1)); }
  }
  return null;
};

const CATS = process.argv[2] ? process.argv[2].split(',') : Object.keys(data);
for (const cat of CATS) {
  console.log('========== ' + cat + ' ==========');
  for (const img of data[cat].slice(0, 10)) {
    const r = await api({ action:'query', titles: img.title, prop:'imageinfo|categories|globalusage', iiprop:'extmetadata', guprop:'url', gulimit:10, cllimit:60, format:'json' });
    if (!r) { console.log('·', img.title.slice(0,60), '  (API 失败，跳过)'); continue; }
    const p = Object.values(r.query?.pages || {})[0];
    const em = p?.imageinfo?.[0]?.extmetadata || {};
    const cats = (p?.categories || []).map(c => c.title.replace('Category:',''));
    const gu = p?.globalusage || [];
    const foodCats = cats.filter(c => /noodle|liang|mian|pi|rice|vinegar|chili|sauce|dumpling|food|cuisine|dish|soup|snack|restaurant|meat|sweet|wine/i.test(c));
    console.log('·', img.title.replace('File:','').slice(0,66));
    console.log('   desc:', (em.ImageDescription?.value || '').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').slice(0,105));
    console.log('   cats:', foodCats.slice(0,7).join(' | '));
    console.log('   wiki:', gu.length ? gu.slice(0,4).map(g => decodeURIComponent(g.url.split('/').pop())).join(' | ') : '(未引用)');
    await sleep(1600);
  }
}
