let things = document.getElementsByClassName("things")
console.log(things)
console.log(things[0])

for (let i = 0; i < things.length; i++) {
  console.log(things[i].innerText)
}

// innerText returns all text contained by an element and all its child elements. 

// innerHTML returns all text that is contained by an element, including HTML tags

var result = document.querySelector("#favoriteThings")
result.style.background = "red"

let collect = document.querySelectorAll(".thing")
for (let i = 0; i < collect.length; i++) {
  collect[i].style.background = "pink"
}

let navBar = document.querySelector("nav")
console.log(navBar.innerHTML)
console.log(navBar.innerText)
console.log(navBar.textContent)

// innerHTML -reads both the HTML markup and the text content of the element. This means when you use it to set the content of elements, you can include HTML tags, and the browser will render them correctly.

// innerText - read the content of an element, it returns the text as it appears on screen. It ignores HTML tags. And it also does not include text that is hidden with CSS styles.

// textContent - also ignores all HTML tags and returns only the text. Whiles innerText reads text as it is rendered on screen, textContent reads text as it is in the markup. It also returns all text, whether it's rendered on screen or not.

let journal = document.getElementById("journal")
journal.textContent = "I am changeing the text"

let myList = document.getElementById("my-list")
// myList.innerHTML = myList.innerHTML + "<li>Task 4</li>"
myList.innerHTML += "<li>Task 4</li>"

// the bullet points are gone since the appended element is a string via innerText
myList.innerText += "<li>Task 5</li>" // accepts the string as it is

myList.textContent += "<li>Task 6</li>" // accepts as a string and nullifies the css

// line break
document.getElementById("changeColor").classList.add("orange")
document.getElementById("changeColor").classList.remove("orange")
//useful if you want to trigger something

document.getElementById("changeColor").classList.toggle("orange")
document.getElementById("changeColor").classList.toggle("orange")
document.getElementById("changeColor").classList.toggle("orange")


var avionList = document.getElementById("avion-list")

var newList = document.createElement("li") // <li></li>
newList.textContent = "List 4" // <li> List 4 </li>

var newList2 = document.createElement("li") // <li></li>
newList2.textContent = "List 5" // <li> List 5 </li>

avionList.append(newList, newList2)

var justiceLeague = ["Superman", "Batman", "Wonder Woman", "The Flash", "Green Latern"]

var leagueList = document.getElementById("league")
// var newName = document.createElement("li") // <li></li>
// newName.textContent = justiceLeague[0] // <li> Superman </li>
// leagueList.append(newName)

for (var i = 0; i < justiceLeague.length; i++) {
  var newName = document.createElement("li") // <li></li>
  newName.textContent = justiceLeague[i] // <li> Superman </li>
  leagueList.append(newName)
}