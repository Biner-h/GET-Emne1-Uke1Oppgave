let Color = ['black', 'orange', 'blue', 'yellow', 'green', 'purple']

function randomColor(){
    let number = Math.floor(Math.random() * Color.length)
    return Color[number];
}

function changeColor(){
    document.body.style.backgroundColor = randomColor();
}