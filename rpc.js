var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    console.log("ArviS - Discord Özel RPC => RPC'niz Hazır, iyi Günlerde Kullanın."),

client.request('SET_ACTIVITY', { 
pid: process.pid, 
activity : {
timestamps: { start: Date.now() },
details : "❤️・@AngelDevelopers",  // Başlığın altında gözüken ince fontlu yazı kısmı.
assets : {

large_image : "arvislogo",  // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın.
small_image : "bluetik", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın.
large_text : "ArviS", // Botu oluştururken girdiğiniz ismi yazın.
},

buttons : [{label : "Discord" , url : "https://discord.gg/5cZ5BaZBCr"},{label : "Instagram" , url : "https://instagram.com/arvis_here"}]

}
})
})

client.login({ clientId : "1030947981492502598" }).catch(console.error); //clientID bölümüne kendi Bot (Application) ID'ni yazacaksınız.
