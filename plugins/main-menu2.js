
import fetch from 'node-fetch'

let handler = async(m) => {
let motivasii = pickRandom(global.motivacion)
    await conn.reply(m.chat, motivasii, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: 'ＭＯＴＩＶＡＣＩＯＮ （^_^）', 
    body: 'Lee son Buenas😉',  
    sourceUrl: "", 
    thumbnailUrl: "https://i.ibb.co/xHqPNmQ/20230627-231554.jpg",
      }}
     })
}

    let pp = './src/Menu2idy.mp4' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
 m.react('📚')      
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['test', 'audios'] 

conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: "乂 ©ＩＤＹ ٩(˘◡˘)۶ B O T Z",
body: "",
thumbnailUrl: "https://telegra.ph/file/63868752c14c0913fbb36.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

export default handler
