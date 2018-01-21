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
