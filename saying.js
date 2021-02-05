
function paintSaying(random) {
    const p = document.createElement("p");
    if (random === 0) {
        p.innerText = "Everything comes to him who hustles while he waits. -Thomas A. Edison-"
        body.appendChild(p);
    } else if (random === 1) {
        p.innerText = "Life is a tragedy when seen in close-up, but a comedy in long-shot. -Charlie Chaplin-"
        body.appendChild(p);
    } else if (random === 2) {
        p.innerText = "Tomorrow hopes we have learned something from yesterday. -John Wayne-"
        body.appendChild(p);
    } else if (random === 3) {
        p.innerText = "The gratification comes in the doing, not in the results. -James Dean-"
        body.appendChild(p);
    } else if (random === 4) {
        p.innerText = "How mant a man has dated a new era in his life from the reading of a book. -Henry David Thoreau-"
        body.appendChild(p);
    } else if (random === 5) {
        p.innerText ="We know what we are, but not what we may be. -William Shakespeare-"
        body.appendChild(p);    
    } else if (random === 6) {
        p.innerText = "Always laugh when you can. It is cheap medicine. -Lord Byron-"
        body.appendChild(p);  
    } else if (random === 7){
        p.innerText = "Only those who will risk going too far can possibly find out how far one can go. -T. S. Eliot-"
        body.appendChild(p);  
    } else if (random === 8)
        p.innerText = "Real love is a permanently self-enlarging experience -M. Scott Peck-"
        body.appendChild(p)
    }

function getRandom() {
    const number = Math.floor(Math.random() * 9);
    return number;
}

function init() {
    const random = getRandom()
     paintSaying(random)
}

init();