$(".con__menu-item").hover(
  function () {
    $(".con__menu-item_bg").addClass("active");
  },
  function () {
    $(".con__menu-item_bg").removeClass("active");
  }
);

const swiperSec1 = new Swiper('.mySwiperSec1', {
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});

const swiperMain = new Swiper('.mySwiperMain', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  freeMode: true,
});

// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

$(".section-group--horizontal-left").each(function (index, node) {
  var $group = $(node);
  var $section = $group.find(" > .sec11_item-wrap");

  gsap.to($section, {
      xPercent: -100 * ($section.length - 1),
      ease: "none",
      scrollTrigger: {
          trigger: $group,
          start: "top+=90 top",
          end: "+=" + ($section.length - 1) + "00%",
          pin: true,
          scrub: true
      }
  });
});


// section 4 marquee
// 왼쪽 → 오른쪽
gsap.to(".slider-1 .tracker", {
  xPercent: 20, // 많이 움직이게
  ease: "none",
  scrollTrigger: {
    trigger: "#sec4",
    start: "top bottom",  // 섹션이 화면에 들어올 때부터
    end: "bottom top",    // 섹션이 사라질 때까지
    scrub: 1,             // 스크롤과 동기화
  }
});

// slider-2 (오른쪽 → 왼쪽)
gsap.to(".slider-2 .tracker", {
  xPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: "#sec4",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  }
});


// section 5 svg
gsap.to("#maskRect", {
  attr: { width: 348 }, // 전체 너비로 확장
  duration: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".arrow-svg",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.to("#maskRect2", {
  attr: { width: 348 }, // 전체 너비로 확장
  duration: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".arrow-svg2",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});