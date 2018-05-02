// const allImage = document.querySelectorAll('.images > img');


var allBtn = $('.buttons button');
console.log(allBtn);

for (let i = 0; i < allBtn.length; i++) {
  $(allBtn[i]).on('click', function (e) {
    const index = $(e.currentTarget).index();
    $('#images').css({
      'transform': `translateX(${-300 * index}px)` 
    })
    
    count = index;
  })
}


let count = 0;
const allLen = allBtn.length;
let timeId;

function setClock() {
  return setInterval(() => {
  allBtn.eq(count%allLen)
  .trigger('click')
  .addClass('red')
  .siblings('.red').removeClass('red');
  
  count++;
}, 1000)
}

timeId = setClock(); 

$('.window').on('mouseenter', () => {
  clearInterval(timeId);
})

$('.window').on('mouseleave', () => {
  timeId = setClock(); 
})

// console.log(typeof allImage);
// console.log(allImage instanceof NodeList); // true

// for (let item of allImage) {
  
// }

// p1.onclick = function(e) {
//   const imgs = document.querySelector('.images');
//   imgs.style.transform = 'translateX(0px)';
//   console.dir(imgs);

// }

// p2.onclick = function(e) {
//   const imgs = document.querySelector('.images');
//     imgs.style.transform = 'translateX(-300px)';

//   console.dir(imgs);
// }

// p3.onclick = function(e) {
//   const imgs = document.querySelector('.images');
//       imgs.style.transform = 'translateX(-600px)';
//   console.dir(imgs);

// }


