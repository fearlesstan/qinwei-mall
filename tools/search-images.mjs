// 搜索 Wikimedia Commons 真实产品照片 → candidates.json
import fs from 'fs';

const QUERIES = [
  { cat:'ganmianpi', qs:['gan mian pi','ganmianpi','擀面皮','liangpi','凉皮'] },
  { cat:'saozi', qs:['saozi noodles','臊子面','qishan noodles','shaaxi noodle soup'] },
  { cat:'biangbiang', qs:['biangbiang noodles','biang biang mian','biangbiang'] },
  { cat:'chilioil', qs:['chinese chili oil','辣椒油','油泼辣子','chili oil jar'] },
  { cat:'vinegar', qs:['chinkiang vinegar','chinese black vinegar','岐山醋','black vinegar bottle'] },
  { cat:'zenggao', qs:['zenggao','甑糕','sticky rice dates','red date rice cake'] },
  { cat:'choujiu', qs:['chinese rice wine','米酒','酒酿','fermented sweet rice','laozao'] },
  { cat:'giftbox', qs:['chinese gift box food','礼盒食品','chinese food gift set'] },
  { cat:'hero', qs:['liangpi','凉皮','cold noodles chili oil','chinese cold noodle'] },
  { cat:'street', qs:["xi'an street food",'xi an food street','shaanxi street food','steamed rice noodle making','noodle making china'] },
];

const UA = { headers: { 'User-Agent': 'QinweiGraduationProject/1.0 (educational demo; contact: student@example.com)' } };
const api = params => fetch('https://commons.wikimedia.org/w/api.php?' + new URLSearchParams(params), UA).then(r => r.json());
const sleep = ms => new Promise(r => setTimeout(r, ms));

const seen = {};
const found = {};
for (const { cat, qs } of QUERIES) {
  found[cat] = [];
  for (const q of qs) {
    if (found[cat].length >= 20) break;
    let res;
    try {
      res = await api({ action:'query', list:'search', srsearch:`filetype:bitmap ${q}`, srnamespace:6, srlimit:14, format:'json' });
    } catch(e){ console.log('search err', q, e.message); continue; }
    for (const r of res.query?.search || []) {
      if (seen[r.title]) continue;
      seen[r.title] = 1;
      if (found[cat].length >= 20) break;
      found[cat].push({ title:r.title });
    }
    await sleep(120);
  }
}

// 取每张图的缩略图地址与元数据
for (const cat of Object.keys(found)) {
  const list = [];
  const titles = found[cat].map(x => x.title);
  let res;
  try {
    res = await api({ action:'query', titles: titles.join('|'), prop:'imageinfo', iiprop:'url|size|mime|extmetadata', iiurlwidth:640, format:'json' });
  } catch(e){ console.log('imageinfo err', cat, e.message); continue; }
  for (const p of Object.values(res.query?.pages || {})) {
    const ii = p.imageinfo?.[0];
    if (!ii || !ii.mime || !/jpeg|png/.test(ii.mime)) continue;
    if (ii.width < 700) continue;
    list.push({
      title: p.title,
      w: ii.width, h: ii.height,
      thumb: ii.thumburl,
      full: ii.url,
      artist: (ii.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '').trim(),
      license: ii.extmetadata?.LicenseShortName?.value || ''
    });
  }
  list.sort((a,b) => b.w - a.w);
  found[cat] = list.slice(0, 20);
  console.log(cat, list.length, 'candidates');
  await sleep(120);
}

fs.writeFileSync('candidates.json', JSON.stringify(found, null, 2));
console.log('DONE -> candidates.json');
