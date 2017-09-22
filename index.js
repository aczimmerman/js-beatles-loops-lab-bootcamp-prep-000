function theBeatlesPlay(musician, instruments) {
  var arr = [];
   for (let i = 0, l = musician.length; i < l, i++) {
     arr.push(`${musician[i]} plays ${instruments[i]}`)
   }
   return arr
}
