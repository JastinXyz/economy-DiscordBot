module.exports = {
  
  name: "dep",
  code: `
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$message]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message]]
$description[**Success deposit $$message Cash to bank!**]
$color[d28108]
$onlyIf[$message<=$getGlobalUserVar[cash];**The deposit should not exceed the money you have!**]
$onlyIf[$message>=1;**You can only deposit more than $1.**]
$argsCheck[>1;Use: \`$getServerVar[prefix]dep <Ammount>\`]`
}