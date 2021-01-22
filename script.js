document.addEventListener("DOMContentLoaded", () => {
    
    let source = document.querySelector('.source');
    let button = document.querySelector('#button');
    let target = document.querySelector('.target');
    button.addEventListener('click', () => {
        target.innerHTML = source.innerHTML
    });
})
