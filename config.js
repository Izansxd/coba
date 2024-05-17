require("./all/module")

global.owner = "6283123448708" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "Ziyoo Bug v1" //NAMA BOT GANTI
global.namaCreator = "Always Ziyoo" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/d8a0346aa59d5eb19f0d2.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://chat.whatsapp.com/C3Hz1uYjb3X3bmZTrFxA' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.packname = "ziyoo bug v1" //GANTI AJ
global.author = "©Always ziyoo" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})