module.exports = {
  
  name: "heist",
  code: `
  $description[$randomText[You and 5 of your friends managed to steal money at International Bank by hacking into the security system.;You yourself have managed to break into the security system and steal the money in it.] **And you get $$random[1200;8000]**]
$color[$random[0;999999]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1200;8000]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;2]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;3]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;3]]]
$globalCooldown[12h;**⏰ Wait for %time% to heist again!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Your hunger rate is at 10%, and you should eat first! You can buy the food.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Your thirst level is at 20%, and you should drink first! You can buy the drink.]
$onlyIf[$getGlobalUserVar[health]>=30;Your health rate is at 30%, and you should take and take medicine first! You can buy it.]
$onlyIf[$getGlobalUserVar[laptop]>=1;There is no laptop!]`
}