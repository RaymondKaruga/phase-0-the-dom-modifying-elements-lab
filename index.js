// Write your code here!
const removeMain = document.querySelector('main#main')
removeMain.remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"

newHeader.textContent = "Raymond is the champion"
