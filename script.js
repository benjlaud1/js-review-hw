function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
}
console.log(isEvenOrOdd(19));

function makeTitle( str ) {
  return str.split( ' ' ).map( function ( word ) {
    return word[0].toUpperCase() + word.substr(1);
  }).join( ' ' );
}

console.log( makeTitle( 'the world of programming is amazing!' ) );

function pigLatin(str) {
  str = str.split(' ').map(function(word){
    if ( isVowel( word[0] ) ) {
      if ( isPunc( word[ word.length - 1 ] ) ) {
        return word.substr( 0, word.length - 1 ) + 'way' + word[ word.length - 1 ];
      } else {
        return word + 'way';
      }
    } else {
      if ( isPunc( word[ word.length - 1 ] ) ) {
        return word.substr( 1, word.length - 2 ) + word[0].toLowerCase() + 'ay' + word[ word.length - 1 ];
      } else {
        return word.substr(1) + word[0].toLowerCase() + 'ay';
      }
    }
    function isVowel(aLetter){
			var re = /^[aeiou]$/i;
  		return re.test(aLetter);
		}
    function isPunc(aLetter){
			var re = /^[,.!?'"]$/i;
  		return re.test(aLetter);
		}
  }).join( ' ' );
  return str[0].toUpperCase() + str.substr(1);
}
var testWord = 'the world of programming is amazing!';
var test1 = 'This is a test!';
var test2 = 'A test this is.';
console.log( pigLatin( testWord ) );
