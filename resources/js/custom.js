const cursor = document.querySelector('.cursor');
const cursorInner = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    cursorInner.setAttribute("style", "top: " + (e.pageY + 3) + "px; left: " + (e.pageX + 3) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});