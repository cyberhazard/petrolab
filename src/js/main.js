/***
 *     ██▓███  ▓█████▄▄▄█████▓ ██▀███   ▒█████   ██▓    ▄▄▄       ▄▄▄▄
 *    ▓██░  ██▒▓█   ▀▓  ██▒ ▓▒▓██ ▒ ██▒▒██▒  ██▒▓██▒   ▒████▄    ▓█████▄
 *    ▓██░ ██▓▒▒███  ▒ ▓██░ ▒░▓██ ░▄█ ▒▒██░  ██▒▒██░   ▒██  ▀█▄  ▒██▒ ▄██
 *    ▒██▄█▓▒ ▒▒▓█  ▄░ ▓██▓ ░ ▒██▀▀█▄  ▒██   ██░▒██░   ░██▄▄▄▄██ ▒██░█▀
 *    ▒██▒ ░  ░░▒████▒ ▒██▒ ░ ░██▓ ▒██▒░ ████▓▒░░██████▒▓█   ▓██▒░▓█  ▀█▓
 *    ▒▓▒░ ░  ░░░ ▒░ ░ ▒ ░░   ░ ▒▓ ░▒▓░░ ▒░▒░▒░ ░ ▒░▓  ░▒▒   ▓▒█░░▒▓███▀▒
 *    ░▒ ░      ░ ░  ░   ░      ░▒ ░ ▒░  ░ ▒ ▒░ ░ ░ ▒  ░ ▒   ▒▒ ░▒░▒   ░
 *    ░░          ░    ░        ░░   ░ ░ ░ ░ ▒    ░ ░    ░   ▒    ░    ░
 *                ░  ░           ░         ░ ░      ░  ░     ░  ░ ░
 *                                                                     ░
 */

new Swiper('.reviews__slider', {
  slidesPerView: 2,
  spaceBetween: 50,
  initialSlide: 1,
  breakpoints: {
    1000: {
      spaceBetween: 10
    },
    667: {
      slidesPerView: 1
    }
  },
  navigation: {
    nextEl: '.reviews__right',
    prevEl: '.reviews__left'
  }
})

new Swiper('.i-blog__slider', {
  slidesPerView: 1,
  spaceBetween: 50,
  initialSlide: 1,
  navigation: {
    nextEl: '.i-blog__right',
    prevEl: '.i-blog__left'
  }
})

// about company description buttons
const scrollDescript = function(){
  if(!document.querySelector('.company__item_mobile .company__item_subtitle')) return null
  const wrapper = document.querySelectorAll('.company__item_mobile')
  const header = document.querySelector('.company__item_mobile .company__item_subtitle');
  const height = header.clientHeight;
  wrapper.forEach(e=>{
    if (innerWidth < 668) e.style.height = height + 'px';
    e.onclick = () => {
      if (innerWidth > 668) return null
      if (e.classList.contains('active-tab')) e.style.height = height + 'px';
      else  e.style.height = e.scrollHeight + 'px';
      e.classList.toggle('active-tab')
    }
  });
}
scrollDescript()

/**
 * Блок "Анализ входных параметров"
 */
void function analysisBlock() {
  const items = [...document.querySelectorAll('.analysis__item')];
  if (!items) return null;
  items[0].classList.add('active');
  const descriptions = [...document.querySelectorAll('.analysis__description')];
  descriptions[0].style.display = 'block';
  items.forEach((item, index) => item.onclick = () => {
    items.forEach(i => i.classList.remove('active'));
    descriptions.forEach(d => d.style.display = '');
    item.classList.add('active');
    descriptions[index].style.display = 'block';
    if (window.innerWidth < 667) animateScrollTo(document.querySelector('#analysis-description'), {speed: 1200, minDuration: 1000})
  })
}()
