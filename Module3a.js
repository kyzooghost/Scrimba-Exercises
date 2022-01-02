//Render 3x images

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee i" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()

// Render the emojis as <span> tags in the emojisContainer <div>

// Hints: Use either createElement(), textContent, and append()
// or innerHTML and a template string

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")

for (let i = 0; i < myEmojis.length; i++) {
    // write your code here
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}

// Get input field

const emojiInput = document.getElementById("emoji-input")
console.log(emojiInput.value)
