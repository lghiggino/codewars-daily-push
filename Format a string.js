/* Format a string of names like 'Bart, Lisa & Maggie'.
https://www.codewars.com/kata/53368a47e38700bd8300030d/solutions/javascript

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

let array = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}, {name: "Moe"}]
let arrayOfTwo = [{name: 'Bart'},{name: 'Lisa'}];
let arrayOfOne = [{name: 'Bart'}];
let arrayOfZero = [];


function list(array){
    if (array.length === 0){
        console.log("");
        return '';
    }else if (array.length === 1){
        console.log(array[0].name);
        return array[0].name;
    } else if (array.length === 2){
        console.log(`${array[array.length-2].name} & ${array[array.length-1].name}`);
        return `${array[array.length-2].name} & ${array[array.length-1].name}`;
    } else{
        let join = ""
        // console.log("this is a longer array")
        for (i = array.length; i > 2; i--){
            // console.log(array[array.length-(i)])
            join += `${array[array.length-(i)].name}, `
        }return(join + `${array[array.length-2].name} & ${array[array.length-1].name}`)
    } 
  }

//   list(array)

//   This could be faster using a reduce or map lets see...

function listMap(array){
    let namesArray = array.map(o => o.name)
    let namesString = namesArray.join(", ")
    return namesString.replace(/(.*),(.*)$/, "$1 &$2")
}

listMap(array)