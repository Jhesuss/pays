/* 

    window.getComputedStyle(elemento).getPropertyValue //lee los estilos de un elemento
    element.style//todo elemento del DOM tiene la propiedad style para definir estilos


*/
// document.body.style.backgroundColor = 'red'

// Para leer, necesitamos el elemento
// console.log(getComputedStyle.getPropertyPriorityValue(--color__brand))

addEventListener('resize', () => {
    const mobileBp = matchMedia('(min-width: 800px)')
    if (mobileBp.matches) {
        document.body.style.backgroundColor = 'red'
    } else {
        document.body.style.backgroundColor = 'yellow'
    }
})