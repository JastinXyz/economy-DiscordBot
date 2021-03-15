module.exports = {
  
  name: "take-medicine",
  code: `
$description[.....]
$setGlobalUserVar[hm;$sub[$getGlobalUserVar[hm];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];9]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];4]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];4]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health level is 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Your hungry level is 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Your thirsty level is 100%]
$onlyIf[$getGlobalUserVar[hm]>=1;Not enough Medicine!]`
}