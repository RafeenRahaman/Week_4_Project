let b = 0
let d = 0
let f = 0
function animate1() {
    let a = Number(document.getElementById('welcome').style.opacity)
    let welcome = document.getElementById('welcome')
    if (a < 1) {
        a += 0.025
    }
    welcome.style.opacity = a

    let welcomeOne = document.getElementById('welcome1')
    if (b < 200) {
        b += 5
    }
    c = b.toString() + 'px'
    welcomeOne.style.marginLeft = c

}

function animate2() {
    let welcomeTwo = document.getElementById('welcome2')
    if (d < 400) {
        d += 5
    }
    e = d.toString() + 'px'
    welcomeTwo.style.marginLeft = e
}

function animate3() {
    let welcomeThree = document.getElementById('welcome3')
    if (f < 200) {
        f += 5
    }
    g = f.toString() + 'px'
    welcomeThree.style.marginLeft = g
}
setInterval(animate1, 25)
setInterval(animate2, 25)
setInterval(animate3, 25)


let welcomeThree = document.getElementById('welcome3')
welcomeThree.style.marginLeft = c