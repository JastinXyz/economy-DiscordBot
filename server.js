var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]"
})
 
//bot status
bot.status({
  text: process.env.BOT_ACTIVITY_TEXT,
  type: process.env.BOT_ACTIVITY_TYPE,
  time: 12
})
 
bot.onMessage()

//variable
bot.variables({
 prefix: process.env.PREFIX,
 bank:"0",
 cash:"0",
 diamond:"0",
 fish:"0",
 fishrod:"0",
 car:"0",
 house:"0",
 laptop:"0",
 fuel:"0",
 health:"100",
 hungry:"100",
 thirsty:"100",
 pizza:"0",
 drink:"0",
 hm:"0",
 daily: process.env.DAILY_SALARY,
 monthly: process.env.MONTHLY_SALARY
})
  
 //commands handler
var reader = fs.readdirSync("./economy/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./economy/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

//help command here
bot.command({

name: "help",
code: `$title[$userTag[$clientID] HELP MENU]

$description[**$getServerVar[prefix]help** - This!
**$getServerVar[prefix]balance** - Your balance.
**$getServerVar[prefix]inven** - Your Inventory.
**$getServerVar[prefix]dep** - Deposit cash to bank.
**$getServerVar[prefix]with** - Withdraw bank to cash.
**$getServerVar[prefix]daily** - Daily salary.
**$getServerVar[prefix]monthly** - Monthly salary.
**$getServerVar[prefix]work** - Work for money.
**$getServerVar[prefix]mining** - Mining for money.
**$getServerVar[prefix]fish** - Fishing.
**$getServerVar[prefix]heist** - Heist the international bank?
**$getServerVar[prefix]give** - Give money to someone.
**$getServerVar[prefix]shop** - Shop. (more command for buying, eating, etc in here!)]

$color[RANDOM]
$footer[SOURCE CODE FROM Jastin Ch in Youtube || https://youtube.com/c/JastinCh || Full Made By JastinCh!]
$addTimestamp`
})
