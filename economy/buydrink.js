module.exports = {
  
  name: "buy-drink",
  code: `
$description[**@$username Success in buying a Drink🥛 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];45]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];1]]
$onlyIf[$getGlobalUserVar[cash]>=45;Not enough cash!]`
}