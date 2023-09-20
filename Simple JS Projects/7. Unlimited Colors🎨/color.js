//Generate a random color

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(randomColor());

let intervalId
const startChangingColor = function(){

    if (!intervalId) {
        intervalId = setInterval(changeBgColor,1000);  // for scope we define intervalId above
    }
    function changeBgColor() {
        
        document.body.style.backgroundColor = randomColor();
    }

}
const stopChangingColor  = function(){
    clearTimeout(intervalId)
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor)
document.querySelector("#stop").addEventListener("click", stopChangingColor)