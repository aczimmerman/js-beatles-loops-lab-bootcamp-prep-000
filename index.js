function theBeatlesPlay(musician, instruments) {
  var arr = [];
   for (let i = 0, l = musician.length; i < l; i++) {
     arr.push(`${musician[i]} plays ${instruments[i]}`)
   }
   return arr
}

function johnLennonFacts(facts) {
  const shoutedFacts = [];
  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
}