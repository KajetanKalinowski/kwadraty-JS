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
    gora.style.display='block'
    dol.style.display='block'
    prawo.style.display='block'
    lewo.style.display='block'
})
function start(){
let kwadrat=rc.rectangle(config.x,config.y,config.width,config.height,{})
svg.appendChild(kwadrat)

}

gora.addEventListener("click",()=>{
    drawGora(config.x,config.y,config.width,config.height)
})

function drawGora(x,y,width,height){
    y=y-height-config.gap
    let kwadrat=rc.rectangle(x,y,width,height)
    x1=x+width/2
    y1=y+height
    x2=x+width/2
    y2=y+height+config.gap

    svg.appendChild(kwadrat)
    let line = rc.line(x1,y1,x2,y2); // x1, y1, x2, y2
    svg.appendChild(line)

    console.log(x1,y1)
    console.log(x2,y2)
    console.log(x,y)
    config.y=y
}
dol.addEventListener("click",()=>{
    drawDol(config.x,config.y,config.width,config.height)
})
function drawDol(x,y,width,height){
    y=height+config.gap+y
    let kwadrat=rc.rectangle(x,y,width,height)
    
    x1=x+width/2
    y1=config.y+height
    x2=x+width/2
    y2=config.y+height+config.gap
    
    svg.appendChild(kwadrat)
    let line = rc.line(x1,y1,x2,y2); // x1, y1, x2, y2
    svg.appendChild(line)
    
    config.y=y
}
prawo.addEventListener("click",()=>{
    drawPrawo(config.x,config.y,config.width,config.height)
})
function drawPrawo(x,y,width,height){
    x=width+config.gap+x
    let kwadrat=rc.rectangle(x,y,width,height)
    
    x1=config.x+width
    y1=y+height/2
    x2=config.x+height+config.gap
    y2=y+height/2
    
    svg.appendChild(kwadrat)
    let line = rc.line(x1,y1,x2,y2); // x1, y1, x2, y2
    svg.appendChild(line)
    
    config.x=x
}
lewo.addEventListener("click",()=>{
    drawLewo(config.x,config.y,config.width,config.height)
})
function drawLewo(x,y,width,height){
    x=config.x-width-config.gap
    let kwadrat=rc.rectangle(x,y,width,height)
    
    x1=x+width+config.gap
    y1=y+height/2
    x2=x+width
    y2=y+height/2
    
    svg.appendChild(kwadrat)
    let line = rc.line(x1,y1,x2,y2); // x1, y1, x2, y2
    svg.appendChild(line)
    console.log(x,y)
    config.x=x
}