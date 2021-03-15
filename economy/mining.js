module.exports = {
  
  name: "mining",
  code: `$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond];$random[0;5]]]
  $setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;4]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;4]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;5]]]
$title[**$username** Get:]
$color[$random[10000;999999]]
$description[$random[0;5] Diamond💎!, \`$getServerVar[prefix]selldiamond\` to sell 1 diamond for $1000]
$globalCooldown[2s;**⏰ Wait for %time% to mining again!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Your hunger rate is at 10%, and you should eat first! You can buy the food.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Your thirst level is at 20%, and you should drink first! You can buy the drink.]
$onlyIf[$getGlobalUserVar[health]>=30;Your health rate is at 30%, and you should take and take medicine first! You can buy it.]`
}