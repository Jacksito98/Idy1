import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `Reglas para usar bots :
- No es basura
- No llamarlo 
- No envíe virus al bot 

Notas:
Todas las funciones del bot las lleva a cabo automáticamente el sistema sin
Hay interferencia del propietario,
Y toda tu información como chat, fotos, videos o Vn
Será seguro sin difusión, y si hay una respuesta absurda o
Pegatina absurda Si, tal vez el dueño esté desarraigado y necesite chatear con amigos :v
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/3f513a07fa6677a38a9c9.jpg' }, caption: rules }, m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|rule)$/i;

export default handler;
