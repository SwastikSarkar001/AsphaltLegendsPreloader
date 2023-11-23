const highlighter = document.getElementById('highlighter');
document.onmousemove = (e) => {
    highlighter.style.setProperty('left', (e.clientX+"px"));
    highlighter.style.setProperty('top', (e.clientY+"px"));
};

document.onmouseout = () => {
    highlighter.style.setProperty('left', "50%");
    highlighter.style.setProperty('top', "50%");
};

const hide = document.getElementById("hide");

function animate() {
    let x = 100;
    const intv = setInterval(() => {
        x-=0.025;
        hide.setAttribute("offset", x--+"%");
        if (x<=0) {
            clearInterval(intv);
        }
    }, 30);
}

const i1 = setTimeout(animate, 1000);
const i2 = setTimeout(animate, 5000);
const i3 = setTimeout(animate, 9000);