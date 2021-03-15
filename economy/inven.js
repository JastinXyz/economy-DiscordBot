module.exports = {
  
  name: "inven",
  code: `$title[Your Inventory $username]
$thumbnail[$userAvatar[$authorID]]
$description[**❤Health**
**Health**: $getGlobalUserVar[health]% 
**Hunger Level**: $getGlobalUserVar[hungry]%
**Level of thirst**: $getGlobalUserVar[thirsty]%

**🗃Inventory:**
**Pizza**: $getGlobalUserVar[pizza] 🍕
**Drink**: $getGlobalUserVar[drink] 🥛
**Health Medicine**: $getGlobalUserVar[hm]
**Fish**: $getGlobalUserVar[fish] Kg
**Fishing equipment**: $getGlobalUserVar[fishrod] 🎣
**Diamond**: $getGlobalUserVar[diamond] 💎
**Laptop**: $getGlobalUserVar[laptop] 💻
**Car**: $getGlobalUserVar[car] 🚗
**House**: $getGlobalUserVar[house] 🏡

**⛽Fuel:**
**Fuel of Car**: $getGlobalUserVar[fuel]L]
$color[RANDOM]
$footer[SOURCE CODE FROM Jastin Ch in Youtube || https://youtube.com/c/JastinCh || Full Made By JastinCh!]
$addTimestamp`
}