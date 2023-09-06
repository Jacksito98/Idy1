// Note Buat Kalian Yang Mau Hapus Namaku Silahkan
// Tapi Tolong Jangan Hapus Nama Nama Yang Di Atas Namaku
// Terima Kasih Telah Menggunakan Script Victoria


import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Tutoriales Bots de menú :
	
	Utilice el comando que desee según el menú que ya aparece, por ejemplo .tqto (ese punto es el prefijo, si no hay ningún prefijo entonces el comando no se ejecutará)
	¿Tu diamantes se han acabado? puedes comprarlos con el comando  (.buy y la cantiad segun tu exp), y todo lo que tienes que hacer es seguirlo. El límite se compra con exp...v
`;
	await conn.sendMessage(m.chat, { image: { url: global.thumb }, caption: tqto }, m)
}
handler.help = ['tutorial']
handler.tags = ['main']
handler.command = /^(tutorial|tutor)$/i;

export default handler;
