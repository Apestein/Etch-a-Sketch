let currentSize = 16
let rainBowMode = false
const grid = document.querySelector('#grid')
const sizeSlider = document.querySelector('#size-slider')
const coloredPixels = document.querySelector('.colored')
const rainBowButton = document.querySelector('#rainbow')
const clearButton = document.querySelector('#clear')

function paint() {
    if (rainBowMode) rainbow(this)
    else this.classList.add('colored')
}

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    for (let i = 0; i < (currentSize*currentSize); i++) {
    const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')
        gridItem.addEventListener('mouseover', paint)
        grid.appendChild(gridItem)
    }
}

function rainbow(pixel) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    const colorString = '#' + randomColor
    pixel.style.backgroundColor = colorString
}

function clear() {
    grid.innerHTML = ''
    createGrid()
}

sizeSlider.oninput = (e) => {
    currentSize = e.target.value
    clear()
}
rainBowButton.onclick = () => rainBowMode = true
clearButton.onclick = clear
createGrid()
