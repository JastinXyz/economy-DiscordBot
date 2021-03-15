module.exports = {
  
  name: "buy-fishrod",
  code: `
$description[**@$username Success in buying a Fishing equipment🎣 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];75]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];1]]
$onlyIf[$getGlobalUserVar[cash]>=75;Not enough cash!]`
}