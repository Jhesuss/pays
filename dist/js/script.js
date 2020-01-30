/* 
    window.getComputedStyle(elemento).getPropertyValue //lee los estilos de un elemento
    element.style//todo elemento del DOM tiene la propiedad style para definir estilos
*/
// document.body.style.backgroundColor = 'red'

// Para leer, necesitamos el elemento
// console.log(getComputedStyle.getPropertyPriorityValue(--color__brand))


// const styles = `
//   background: yellow;
//   border:4px solid red;  
// `
// document.getElementById('mobile_card').setAttribute('style', styles)
// addEventListener('resize', () => {
//     const mobileBp = matchMedia('(min-width: 800px)')
//     if (mobileBp.matches) {
//         document.body.style.backgroundColor = 'red'
//     } else {
//         document.body.style.backgroundColor = 'yellow'
//     }
// })

// const mobileBp = matchMedia('(min-width: 800px)')

// const changeSizeCard = mql => {
//     if(mql.matches){
//         const styles = `
//             background: green;
//             border:4px solid red;  
//             display:inline-flex;
//             flex-direction: column;
//             z-index: 99999;
//             position: relative;
//         `
//         document.getElementById('mobile_card').setAttribute('style', styles) 
//     }
//     else{
//         const styles = `
//             background: yellow;
//             border:4px solid red;  
//             display:inline-flex;
//             flex-direction: column;
//             z-index: 99999;
//             position: relative;
//         `
//         document.getElementById('mobile_card').setAttribute('style', styles)
//         // document.body.style.background = 'yellow'
//     } 
// }
// changeSizeCard(mobileBp)
// mobileBp.addEventListener(changeSizeCard)

//Manejarlo por clases por CSS


const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 2,
      stretch: 0,
      depth: 900,
      modifier: 1,
      slideShadows : false,
    }, 
    pagination: {
       el: '.swiper-pagination',
    },    
  });

  
  document.querySelector('.slide-1').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
  });
  document.querySelector('.slide-250').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(249, 0);
  });