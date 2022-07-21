const board =document.querySelector('#board')
const squaresNumber = 402
const colors =['red','yellow','purple',
'green','orange','pink', 'blue','greenyellow']

for(let i=0; i< squaresNumber; i++)
{
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', ()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave', ()=>{
        removeColor(square)
    })

    board.append(square)
}

const setColor = (element)=>{
    let color = randomColor()
    let color2= randomColor2()
    element.style.backgroundColor = color;
    element.style.boxShadow =`0 0 2px ${color2 }, 0 0 10px ${color2}`;

}
const removeColor = (element)=>{
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow =`0 0 2px #000`;
}
const randomColor = ()=>{
    const index = Math.floor(Math.random()* colors.length)
    
    return colors[index]
}
const randomColor2 = ()=>{
    const index = Math.floor(Math.random()* colors.length)
    
    return colors[index]
}