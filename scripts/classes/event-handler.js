function gridClick(e) {
    const s = e.currentTarget;
    s.classList.add("square-clicked");
    setTimeout(() => {
        s.classList.remove("square-clicked");
    }, 100);

    if (e.button === 0) {
        console.log("User left-clicked!");
    }
    else if (e.button === 2) {
        console.log("User right-clicked!");
    }
}

function preventContext(el) {
    el.addEventListener("contextmenu", e => e.preventDefault());
}

const EventHandler = {
    init(ELs) {
        preventContext(ELs.gridEl);
    },
    
    hookUpSquare(squareEl) {
        preventContext(squareEl);
        if (!squareEl.classList.contains("empty-square")) {
            squareEl.addEventListener("mousedown", gridClick);
        }
    }
}

export default EventHandler;