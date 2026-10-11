// 按标题匹配下载选中的真实照片（1400px 宽）到 ../images/photos/
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('candidates2.json', 'utf8'));
const sleep = ms => new Promise(r => setTimeout(r, ms));

// 标题关键字 → 目标文件名
const MAP = [
  ['陕西小吃擀面皮', 'ganmianpi-main.jpg'],
  ['File:擀面皮.jpg', 'ganmianpi-2.jpg'],
  ['Liangpi noodles in spicy sauce, La Taverne de Zhao, Paris 17 September 2016 002', 'flavor-spicy.jpg'],
  ['Liangpi noodles in spicy sauce, La Taverne de Zhao, Paris 17 September 2016 001', 'flavor-spicy-2.jpg'],
  ['Majiang liangpi', 'flavor-sesame.jpg'],
  ['西安美食凉皮', 'flavor-sour.jpg'],
  ['Shihezi-style Liangpi', 'ganmianpi-3.jpg'],
  ['File:LIANG PI.jpg', 'ganmianpi-bowls.jpg'],
  ['Liangpi at Hamarkand', 'ganmianpi-4.jpg'],
  ['岐山臊子面', 'saozi-main.jpg'],
  ['Qishan Noodles @ Chez Mam @ Paris (34885321146)', 'saozi-2.jpg'],
  ['Qishan Noodles @ Chez Mam @ Paris (34082622764)', 'saozi-3.jpg'],
  ['Biáng Biáng Miàn noodles with its Hanzi', 'biangbiang-main.jpg'],
  ['File:Biang Biang Mian.jpg', 'biangbiang-2.jpg'],
  ['Biang Biang noodles, May 2019', 'biangbiang-3.jpg'],
  ['Biang Biang Noodles at Qintangyizhan', 'biangbiang-4.jpg'],
  ['sauce chili oil October 2025 N13P 06', 'chilioil-main.jpg'],
  ['sauce chili oil October 2025 N13P 08', 'chilioil-2.jpg'],
  ['辣椒油 chili oil January 2024 R12S 03', 'chilioil-3.jpg'],
  ['File:Chinese Vinegar.jpg', 'vinegar-main.jpg'],
  ['Chinkiang vinegar', 'vinegar-2.jpg'],
  ['Noodle Theory (4696927400)', 'vinegar-3.jpg'],
  ['Glutinous rice Babaofan with dates', 'zenggao-main.jpg'],
  ['Ba Bao Fan by kawanet at Din Tai Fung', 'zenggao-2.jpg'],
  ['Gary Stevens (Gary Soup) Eight Treasure Rice', 'zenggao-3.jpg'],
  ['File:Jiuniang.jpg', 'choujiu-main.jpg'],
  ['赤豆酒酿元宵', 'choujiu-2.jpg'],
  ['5月14日 枸杞酒釀丸子', 'choujiu-3.jpg'],
  ['Liz Gastronomie Mooncake Gift Box 20160915', 'giftbox-main.jpg'],
  ['Xing Hua Lou tin box mooncakes sold at Shanghai Railway Station', 'giftbox-2.jpg'],
  ['Starbucks xingyue mooncake gift box', 'giftbox-3.jpg'],
  ['Muslim food street market, Xi\'an, May, 2018-1', 'street-1.jpg'],
  ['Muslim food street market, Xi\'an, China - panoramio (1)', 'street-2.jpg'],
  ['西安永兴坊 05', 'street-3.jpg'],
];

const all = [];
for (const list of Object.values(data)) all.push(...list);

const outDir = '../images/photos';
fs.mkdirSync(outDir, { recursive: true });
const credits = [];

(async () => {
  for (const [needle, file] of MAP) {
    const img = all.find(x => x.title.includes(needle));
    if (!img) { console.log('MISS', needle); continue; }
    const url = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(img.title.replace('File:', '')) + '?width=1400';
    let ok = false;
    for (let a = 0; a < 4 && !ok; a++) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': 'QinweiGraduationProject/1.0' }, redirect: 'follow' });
        if (r.status === 429) { await sleep(3000 * (a + 1)); continue; }
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const buf = Buffer.from(await r.arrayBuffer());
        if (buf.length < 20000) throw new Error('too small ' + buf.length);
        fs.writeFileSync(outDir + '/' + file, buf);
        credits.push({ file, source: img.title, artist: img.artist, license: img.license, w: img.w, h: img.h });
        console.log('ok ', file, (buf.length / 1024 | 0) + 'KB', img.w + 'x' + img.h);
        ok = true;
      } catch(e){ if (a === 3) console.log('ERR', file, e.message); await sleep(1800); }
    }
    await sleep(1400);
  }
  fs.writeFileSync('credits.json', JSON.stringify(credits, null, 2));
  console.log('DONE', credits.length, 'photos');
})();
