console.log("advent day 03 is on")

// const singleLine = document.querySelector(".line").textContent;
// console.log(singleLine, singleLine.length, singleLine.charAt(3))

const allLines = document.querySelectorAll(".line");
// allLines.forEach(line => {
//     let lineText = line.textContent
//     console.log(lineText)
//     console.log(lineText.charAt(0))
// })

function countTreesThree(array){
    let count = 0;
    array = Array.from(array)
    //console.log(array)
    for (let i = 0; i < array.length; i++){
        let lineText = array[i].textContent
        //console.log(lineText)
        lineText = lineText.repeat(50)
        if(lineText.charAt(i*3) ===  "#"){
            count++
        }
    }
    console.log(count)
}

function countTreesOne(array){
    let count = 0;
    array = Array.from(array)
    //console.log(array)
    for (let i = 0; i < array.length; i++){
        let lineText = array[i].textContent
        //console.log(lineText)
        lineText = lineText.repeat(50)
        if(lineText.charAt(i) ===  "#"){
            count++
        }
    }
    console.log(count)
}

function countTreesFive(array){
    let count = 0;
    array = Array.from(array)
    //console.log(array)
    for (let i = 0; i < array.length; i++){
        let lineText = array[i].textContent
        //console.log(lineText)
        lineText = lineText.repeat(300)
        if(lineText.charAt(i*5) ===  "#"){
            count++
        }
    }
    console.log(count)
}

function countTreesSeven(array){
    let count = 0;
    array = Array.from(array)
    //console.log(array)
    for (let i = 0; i < array.length; i++){
        let lineText = array[i].textContent
        //console.log(lineText)
        lineText = lineText.repeat(500)
        if(lineText.charAt(i*7) ===  "#"){
            count++
        }
    }
    console.log(count)
}

function countTreesOneDownTwoRight(array){
    let count = 0;
    array = Array.from(array)
    //console.log(array)
    for (let i = 0; i < array.length; i += 2){
        let lineText = array[i].textContent
        //console.log(lineText)
        lineText = lineText.repeat(300)
        if(lineText.charAt(i/2) ===  "#"){
            count++
        }
    }
    console.log(count)
}

console.log("3x1")
countTreesThree(allLines)
console.log("1x1")
countTreesOne(allLines)
console.log("5x1")
countTreesFive(allLines)
console.log("7x1")
countTreesSeven(allLines)
console.log("1x2")
countTreesOneDownTwoRight(allLines)

console.log(282*53*54*54*22)