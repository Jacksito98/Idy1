import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // cuando alguien invita/envía el enlace del grupo en un chat privado
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('invitacion a mi grupo de WhatsApp') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `Para agregar al bot a tu grupo o alquilar
• Une a mi creador
• Dale adm
Y el creador agregara al bot a tu grupo cuando pueda y vea que no eres un palomo 🫵🏼🫵🏼🫵🏼, aqui te dejo a mi creador:) 
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
