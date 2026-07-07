import fs from 'fs'
const c = JSON.parse(fs.readFileSync('src/strk-img-config.json', 'utf-8'))
console.log('story-img-velmora-3d8f1a:', !!c['story-img-velmora-3d8f1a'])
console.log('keys with story:', Object.keys(c).filter(k => k.includes('story')))
console.log('total keys:', Object.keys(c).length)
