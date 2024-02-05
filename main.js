const btninc = document.querySelector('.btn-inc')
const btndec = document.querySelector('.btn-dec')
const btnclr = document.querySelector('.btn-clr')
const number = document.querySelector('.number')
let countNum = 0

function updateCounter(n){
    if(countNum +n < 0){
        return
    }
    countNum +=n
    number.textContent =countNum
}
btninc.addEventListener('click',()=>updateCounter(1))
btndec.addEventListener('click',()=>updateCounter(-1))
btnclr.addEventListener('click',()=>updateCounter(-countNum))
