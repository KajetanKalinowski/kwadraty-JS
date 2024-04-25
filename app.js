let rc = rough.svg(document.querySelector('#svg'))
//buttuns\/
const gora = document.querySelector('#gora')
const dol = document.querySelector('#dol')
const prawo = document.querySelector('#prawo')
const lewo = document.querySelector('#lewo')
const startu = document.querySelector('#start')
//buttons/\
var config = {
    "x": 900,
    "y": 300,
    "gap": 30,
    "width": 100,
    "height": 100
}
startu.addEventListener("click",()=>{
    start(config.x,config.y,config.width,config.height)
    startu.style.display='none'
})
function start(){
let kwadrat=rc.rectangle(config.x,config.y,config.width,config.height,{})
svg.appendChild(kwadrat)

}

gora.addEventListener("click",()=>{
    drawGora(config.x,config.y,config.width,config.height)
})

function drawGora(x,y,width,height){
    y=config.height+config.gap
    let kwadrat=rc.rectangle(x,y,width,height)
    x1=x+width/2
    y1=y+height
    x2=x+width/2
    y2=y+height

    svg.appendChild(kwadrat)
    let line = rc.line(x1,y1,x2,y2); // x1, y1, x2, y2
    svg.appendChild(line)

    console.log(x1,y1)
    console.log(x2,y2)
    console.log(x,y)
}