// let count = 5
// count = count + 1 
 
// console.log(count)

// intialize the count as 0, listen for clicks on the increment button and increment the count variable when the button is clicked
// "camelCase", way to write down variable name in js

// Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// grab the count-el element, store it in a countEl variable
// change the count-el in the HTML to reflect the new count
// inside the brackets, we "pass in an argument"
let countEl = document.getElementById("count-el")

let count = 0

// make sure that the HTML-element can be accessed
// just gives back the h2 element, now able to manipulate the element
console.log(saveEl)
console.log(countEl)


function increment() {
    // console.log("button was clicked")
    count += 1
    // modify the countEl element with the keyword ".innerText", should display the new count
    // set countEl's innerText to the count
    countEl.innerText = count 
    // console.log(count)
}

// Create a function, save(), which logs out the count when it's called
function save () {
    // Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let previousCounts = count + " - "
    // Render the variable in the saveEl using innerText
    // Make sure to not delete the existing content of the paragraph
    // "textContent" instead of "innerText" because of missing spaces
    saveEl.textContent += previousCounts

    // set back to 0 after saving, change the countEl as well as the count variable
    countEl.textConent = 0
    count = 0     
    console.log(count)
}






