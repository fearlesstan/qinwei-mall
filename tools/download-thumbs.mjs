// 下载候选缩略图到 thumbs/ 供人工挑选
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('candidates.json', 'utf8'));
fs.mkdirSync('thumbs', { recursive: true });

const sleep = ms => new Promise(r => setTimeout(r, ms));
let i = 0;
for (const [cat, list] of Object.entries(data)) {
  for (const img of list) {
    i++;
    const ext = img.thumb.includes('.png') ? 'png' : 'jpg';
    const file = `thumbs/${cat}-${String(list.indexOf(img)).padStart(2,'0')}-${String(i).padStart(3,'0')}.${ext}`;
    if (fs.existsSync(file)) continue;
    try {
      const r = await fetch(img.thumb, { headers: { 'User-Agent': 'QinweiGraduationProject/1.0' } });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < 8000) throw new Error('too small');
      fs.writeFileSync(file, buf);
      console.log('ok ', cat, img.title.slice(0, 60), buf.length);
    } catch(e) {
      console.log('ERR', cat, img.title.slice(0, 60), e.message);
    }
    await sleep(80);
  }
}
console.log('DONE');
