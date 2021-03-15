module.exports = {
  
  name: "with",
  code: `
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$message]]
$description[**Success withdraw $$message Bank to cash!**]
$color[d28108]
$onlyIf[$message<=$getGlobalUserVar[bank];**The withdraw should not exceed the money you have!**]
$onlyIf[$message>=1;**You can only withdraw more than $1.**]
$argsCheck[>1;Use: \`$getServerVar[prefix]with <Ammount>\`]`
}