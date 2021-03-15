module.exports = {
  
  name: "give",
  code: `$title[Give Cash!]
$description[<:miu_amano1:799075354094338049> You just give <@$mentioned[1]> $$message[2] Cash!]

  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$mentioned[1]];$message[2]];$mentioned[1]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$authorID];$message[2]];$authorID]
$onlyIf[$message[2]<$getGlobalUserVar[cash;$authorID];**You don't have that much cash!**]

$onlyIf[$message[2]>=1;**You can only give more than $1.**
$argsCheck[2;To Use: \`$getServerVar[prefix]give <@user> <ammount>\`]]
$color[$random[0;999999]]


`
}