window.addEventListener("DOMContentLoaded", function () {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
      types: "words, chars",
      tagName: "span",
    });
  
    //CTA block motion
    let titleCta = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-wrap",
        start: "1% top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    titleCta.to(".hero-cta-wrap", {
      yPercent: -250,
    });
    //H1 motion
    let titleHero = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-wrap",
        start: "1% top",
        end: "50% 50%",
        scrub: 1,
        //markers: true,
      },
    });
    titleHero.to(".hero-h", {
      yPercent: -55,
      opacity: 0,
    });
    //PLANET Opacity motion
    let planetOpacity = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-wrap",
        start: "35% 50%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    planetOpacity.to(".hero-bg-col", {
      opacity: 1,
    });
    planetOpacity.to(".hero-svg", {
      opacity: 0,
    });
  
    // Sub hero motion
    $(".sub-hero-cont").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find("[letters-slide-down] .char"), {
        yPercent: 120,
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        stagger: { amount: 1, each: 0.2 },
      });
      tl.fromTo(
        $(this).find(".sub-hero-img-wrap"),
        {
          width: "0rem",
        },
        {
          width: "12rem",
          duration: 0.5,
          ease: "power1.out",
        },
        ">.5",
      );
      createScrollTrigger($(this), tl);
    });
  
    // MOTION Template
    function createScrollTrigger(triggerElement, tl) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "-10% 50%",
        end: "25% bottom",
        ///markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    }
    //PLANET motion
    let planet = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    planet.to(".hero-svg", {
      scale: 1.75,
    });
  
    // Limitless possibiility
    $(".container.limitless-pos").each(function (index) {
      let tlLimit = gsap.timeline({
        scrollTrigger: {
          trigger: ".container.limitless-pos",
          start: "15% 50%",
          end: "85% 50%",
          markers: true,
        },
      });
      tlLimit.from($(this).find("[letters-slide-down] .word"), {
        xPercent: -110,
        opacity: 0.4,
        duration: 0.6,
        ease: "power1.out",
        //markers: true,
        stagger: { amount: 1, each: 0.2 },
      });
      tlLimit.fromTo(
        $(this).find(".bento-bl"),
        {
          yPercent: 10,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
          stagger: { amount: 1, each: 0.1 },
        },
      );
    });
  });
  