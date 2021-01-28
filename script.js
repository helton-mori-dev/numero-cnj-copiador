document.addEventListener("DOMContentLoaded", () => {
    
    let source = document.querySelector('.source');
    let button = document.querySelector('#button');
    let target = document.querySelector('.target');
    button.addEventListener('click', () => {
        let textSource = source.value;
        target.innerHTML  = textSource.replace(/\D+/g,'')
    });
})
