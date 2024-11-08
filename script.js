const progress = document.querySelector('.line-active')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const numbers = document.querySelectorAll('.number')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    
    if(currentActive > numbers.length) {
        currentActive = numbers.length
    }
    
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    
    if(currentActive < 1) {
        currentActive = 1
    }
    
    update()
})

function update() {
    numbers.forEach((number, idx) => {
        if(idx < currentActive) {
            number.classList.add('active')
        } else {
            number.classList.remove('active')
        }
    })
    
    const actives = document.querySelectorAll('.active')
    
    progress.style.width = ((actives.length - 1) / (numbers.length - 1)) * 100 + '%'
    
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === numbers.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}