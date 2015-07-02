$(document).on('ready', function(){

// number one
// var persons = {
//  		name : 'luisa',
//  		age : 25
// }

// var getName = function(object){
//  	return object.name

// };

// console.log( getName(persons) );

// number 2
// var str = ['javascript', 'is', 'awesome']

// var totalLetters = 0
// 	for( i = 0; i < str.length; i++ ){
// 		totalLetters += str[i].length;
// 	}
//  console.log(totalLetters);

// number 3
// var cityObj = {
// 	city : 'Denver'
// }

// var keyValue = function(city, argument){
// 	return cityObj
// }

// console.log(keyValue(cityObj))

// number 4
// var firstArray = ['a', 'b', 'c', 'd', 'e'];     
// var secondArray = ['jerry', 'sarah', 'sally'];     

// var negativeIndex = function(array, index){
// 	return array[array.length + index]
// }

// console.log(negativeIndex( firstArray, -2) );
// console.log(negativeIndex( secondArray, -1) );

//number 5
// var removeM = function(string){
// 	var newString = ''
// 	for( i = 0; i < string.length; i++){
// 		if( string.charAt(i) !== 'm'){
// 			newString += string.charAt(i);
// 		}
// 	} return newString

// }

// console.log(removeM('family'));
// console.log(removeM('memory'));

// number 6
// var printObject = function(object){
// 	for( var key in object){
// 		console.log(key + ' is ' + object[key])
// 	}

// }
// printObject({firstName: 'pork', lastName: 'chops'})

// number 7
// var vowels = function(string){
// 	var vowels = {
// 		a : 'a',
// 		e : 'e',
// 		i : 'i',
// 		o : 'o',
// 		u : 'u'
// 	}
// 	var stringArray = string.split('');
// 	var output = stringArray.filter(function(element){
// 		return element.toLowerCase() in vowels;
// 	})
// 	return output;
// }
// console.log(vowels('alabama'));

// number 8
// var twins = function(array) {
// 	var testing = 0

// 	for(var i = 0; i < (array.length - 1); i += 2) {
// 		if(array[i] === array[ i + 1 ]) {
// 			testing++
// 			console.log(testing);
// 		}
// 	}
// 	return testing === array.length/2;
// };
// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));

// number 9
// var or = function(array){
// 	if (array.length === 0){
// 		return false
// 	}
// 	else{
// 		var count = 0;
// 		for(var i = 0; i < array.length; i++){
// 			if(array[i] === true){
// 				count ++;
// 			}
// 			else{
// 				count += 0;
// 			}

// 		}
// 		if (count === 0){
// 			return false;
// 		}
// 		else{
// 			return true;
// 		}
// 	}
// }

// console.log(or([false, false, true, false]))

// number 10
// var unique = function(array){
// 	var newArray = [];
// 	array.forEach(function(element){
// 		if (newArray.indexOf(element) === -1){
// 			newArray.push(element)
// 		}
// 	});
// 	return newArray;
// }
// console.log(unique(['a', 'b', 'c', 'd', 'd']));


});
