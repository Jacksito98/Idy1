import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['12602000000', 'Jacksito', true],
  ['18295176783'], 
  ['18097157028'] 
] //Numeros de owner 

global.mods = ['573125484672'] 
global.prems = ['50489079501', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'F5Q8bnLW' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'Idy┃ᴮᴼᵀ' 
global.author = '@Js98' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/jack_paymon\n' 
global.dygp = 'https://chat.whatsapp.com/E3FSVfNufgBEKr04r3e2vk'
global.fgsc = 'https://github.com/FG98F/Jacksito98' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://paypal.me/Jacksito23'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
