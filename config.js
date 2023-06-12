import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['212620403099', '👑 LuffyDEV - Creador 👑', true],
  ['212620403099', '💫 LuffyDEV - Collaborator 1 💫', true],
  ['212620403099', '💫 LuffyDEV - Collaborator 2 💫', true],
  ['212620403099', '💫 LuffyDEV - Collaborator 3 💫', true],
  ['212620403099', '💫 LuffyDEV - Collaborator 4 💫', true],
  ['212620403099', '💫 LuffyDEV - Collaborator 5 💫', true],  
  ['212620403099', '💫 JELLOULI SAID - Collaborator 6 💫', true],
  ['212620403099', '💫 FAMILLY - Collaborator 7 💫', false],

] 

global.suittag = ['212620403099'] 
global.prems = ['212620403099'] 

global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = '★LUFFYDEV - 𝙱𝚘𝚝★'
global.wm = '★LUFFYDEV - 𝙱𝚘𝚝★'
global.igfg = '★LUFFYDEV - 𝙱𝚘𝚝★'
global.wait = '*[❗] Wait, wait a munite...*'

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')

global.mods = [] 

//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'us'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ LUFFYDEV - 𝙱𝚘𝚝`
global.gt = '★LUFFYDEV - 𝙱𝚘𝚝★'
global.mysticbot = '★LUFFYDEV - 𝙱𝚘𝚝★'
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.waitt = '*[❗] Wait, wait a munite...*'
global.waittt = '*[❗] Wait, wait a munite...*'
global.waitttt = '*[❗] Wait, wait a munite...*'
global.nomorown = '212620403099'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
