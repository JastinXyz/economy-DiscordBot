module.exports = {
  
  name: "sellfish",
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];250]]
$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish];5]]
$title[__**SELLING FISH🐟**__]
$color[00ff59]
$description[
**@$username Successfully selling 5 KG Fish for $250.**]
$onlyIf[$getGlobalUserVar[fish]>=5;You don't have that many fish!.]`
}