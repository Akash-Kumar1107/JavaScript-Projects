var main = document.querySelector('#main')  
var cursr = document.querySelector('.cursor')  

main.addEventListener('mousemove',function (dets) {
    cursr.style.left = dets.x+'px'
    cursr.style.top = dets.y+'px'
})