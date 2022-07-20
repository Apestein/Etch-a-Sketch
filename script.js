function paint() {
    this.classList.add('colored')
}

const grid = document.querySelector('#grid')
for (let i = 0; i < 16*16; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.addEventListener('mouseover', paint)
    grid.appendChild(gridItem)
}
grid.style.gridTemplateColumns = 'repeat(16, 1fr)'
//grid.style.gridTemplateRows = 'repeat(100, 1fr)'
