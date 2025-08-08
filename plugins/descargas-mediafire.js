import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsFire}`
m.react("📥")
try {  
const res = await fetch(`https://api.agatz.xyz/api/mediafire?url=${args}`)
const data = await res.json();
const caption = `${eg}
> ┃ 𓃠 *${gt} ${vs}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💫 ${mid.name}
> ┃  ${data.data.nama}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💪 ${mid.smsYT11}
> ┃ ${data.data.size}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀 ${mid.smsYT12}
> ┃  ${data.data.mime}
`.trim();
m.reply(caption);
conn.sendFile(m.chat, data.data.link, data.data.nama, '', m, null, {mimetype: data.data.mime, asDocument: true, 
});
} catch {
try {
const res = await fetch(`${global.APIs.fgmods.url}/downloader/mediafire?url=${args[0]}&apikey=${global.APIs.fgmods.key}`);
const data = await res.json();
const fileData = data.result;
const caption = `${eg}
> ┃ 𓃠 *${gt} ${vs}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💫 ${mid.name}
> ┃  ${fileData.title}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💪 ${mid.smsYT11}
> ┃ ${fileData.filesize}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀 ${mid.smsYT12}
> ┃  ${fileData.mimetype}
`.trim();
await conn.sendFile(m.chat, fileData.url, fileData.title, caption, m, null, {mimetype: fileData.mimetype, asDocument: true });
m.react('✅'); 
} catch (error) {
try {
const res = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${args[0]}`);
if (!res.ok) throw new Error(`Error en la API 1: ${res.statusText}`);
const data = await res.json();
if (!data.status || !data.data) return 
const fileDataArray = data.data;
for (const fileData of fileDataArray) {
const caption = `${eg}
> ┃ 𓃠 *${gt} ${vs}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💫 ${mid.name}
> ┃ ${fileData.filename}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💪 ${mid.smsYT11}
> ┃ ${fileData.size}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀 ${mid.smsYT12}
> ┃  ${fileData.mime}`.trim(); 
await conn.sendFile(m.chat, fileData.link, fileData.filename, caption, m, null, {mimetype: fileData.mime, asDocument: true });
m.react('✅'); 
}
} catch (error) {
try {
const res = await fetch(`${apis}/api/mediafire?url=${args[0]}`);
if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
const data = await res.json();
const fileDataArray = data.data;
fileDataArray.forEach((fileData) => {
let caption = `${eg}
> ┃ 𓃠 *${gt} ${vs}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💫 ${mid.name}
> ┃ ${fileData.filename}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💪 ${mid.smsYT11}
> ┃ ${fileData.size}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀 ${mid.smsYT12}
> ┃ ${fileData.mime}`.trim()
m.reply(caption);
conn.sendFile(m.chat, fileData.link, fileData.filename, '', m, null, {mimetype: fileData.mime, asDocument: true, 
});
m.react(`✅`);
});
} catch (error) {
try {
let res = await mediafireDl(args[0])
let { name, size, date, mime, link } = res
let caption = `${eg}
> ┃ 𓃠 *${gt} ${vs}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💫 ${mid.name}
> ┃ ${name}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💪 ${mid.smsYT11}
> ┃ ${size}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀 ${mid.smsYT12}
> ┃ ${mime}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'Super Bot WhatsApp', previewType: 0, thumbnail: gataMenu, sourceUrl: md}}})
await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })
m.react(`✅`);
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
m.react(`❌️`);
handler.limit = false      
}}}}}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = true
export default handler

async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
