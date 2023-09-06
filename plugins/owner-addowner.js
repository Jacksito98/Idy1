let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `Etiqueta a la persona!`
    if (global.owner.includes(who.split`@`[0])) throw 'Se ha convertido en propietario !'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} Ahora propietarios !`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addowner']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.owner = true

export default handler
