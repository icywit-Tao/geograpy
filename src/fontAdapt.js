function fontAdapt() {
    let docEl = document.documentElement;
    docEl.style.fontSize = `${docEl.clientWidth / 7.5}px`;
}

window.addEventListener('resize', fontAdapt, false);

export default fontAdapt;
