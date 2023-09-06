//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Etiqueta o menciona a alguien\n\n📌 Ejemplo : ${usedPrefix + command} @user`
if (global.owner.includes(who.split`@`[0])) throw '✳️ El usuario Mensionado Ya es owner'
global.owner.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ OWNER

@${who.split`@`[0]} ahora te conviertes dueño
┌───────────
▢ *Nombre:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addowner <@tag>']
handler.tags = ['owner']
handler.command = ['addowner', 'addow'] 

handler.group = true
handler.rowner = true

export default handler
