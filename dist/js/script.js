const $hero = document.querySelector('.hero')
const $video = document.querySelector('video')
const $text = $hero.querySelector('.hero__text')
const $overlay = document.querySelector('.hero__overlay')


// scrollMagic
const controller = new ScrollMagic.Controller()


// scene
const scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: $hero,
  triggerHook: 0
})
  // .addIndicators()
  .setPin($hero)
  .addTo(controller)

// Text Animation
const textAnim = gsap.fromTo($text, {opacity: 1}, {opacity: 0, duration: 3});

const scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: $hero,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)


// background Animation
const background = gsap.fromTo($overlay, {opacity: 1}, {opacity: 0, duration: 2});

const scene3 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: $hero,
  triggerHook: 0
})
  .setTween(background)
  .addTo(controller)


  // Video Animation
  let accelAmount = 0.1
  let scrollPosition = 0
  let delay = 0

  scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000 // to become in seconds
    // console.log(scrollPosition)
  })

  setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount
    console.log(scrollPosition, delay)

    $video.currentTime = delay
  }, 33.3)  // 30 frames per second  => 1000/30


  // LightBox
  const lightbox = $('.gallery a').simpleLightbox(options);