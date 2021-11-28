gsap.set("#front-star, #inner-flower, #inner-star-blue, #inner-star-yellow, #yellow-flower, #middle-star, #tri-lines-n, #tri-lines-ne, #tri-lines-se, #tri-lines-sw, #tri-lines-nw", {autoAlpha: 0});

gsap.to("#front-star", 1, { ease: Elastic.easeOut, autoAlpha: 1, repeat: -1});        
gsap.to("#inner-flower", 2, { ease: Elastic.easeOut, autoAlpha: 1, repeat: -1, delay: 0.2});    
gsap.to("#inner-star-blue", 2, { fill: "hsl(+=360, +=0%, +=0%)", autoAlpha: 1, ease: Linear.easeNone, repeat: -1, delay: 0.5, yoyo: true});
gsap.to("#inner-star-yellow", 2, { ease: Elastic.easeOut, autoAlpha: 1, repeat: -1, delay: 0.3});
gsap.to("#yellow-flower", 2, { ease: Elastic.easeOut, autoAlpha: 1, repeat: -1, delay: 0.4});
gsap.to("#middle-star", 2, { ease: Elastic.easeOut, autoAlpha: 1, repeat: -1, delay: 0.5});

var tlBackLeaf = gsap.timeline({repeat: -1, repeatDelay: 1});
tlBackLeaf.from(".back-leaf-rgb", {
  stagger: 0.1,
  autoAlpha: 0
});
tlBackLeaf.to(".back-leaf-rgb", {
  stagger: 0.1,
  ease: Elastic.easeOut,
  autoAlpha: 1
    });
gsap.to(`#tri-lines-n`, 2, { ease: Bounce.easeOut, autoAlpha: 1, repeat: -1, delay: 1.1});
gsap.to(`#tri-lines-ne`, 2, { ease: Bounce.easeOut, autoAlpha: 1, repeat: -2, delay: 1.2});
gsap.to(`#tri-lines-se`, 2, { ease: Bounce.easeOut, autoAlpha: 1, repeat: -3, delay: 1.3});
gsap.to(`#tri-lines-sw`, 2, { ease: Bounce.easeOut, autoAlpha: 1, repeat: -4, delay: 1.4});
gsap.to(`#tri-lines-nw`, 2, { ease: Bounce.easeOut, autoAlpha: 1, repeat: -5, delay: 1.5});