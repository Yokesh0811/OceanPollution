const tl = gsap.timeline({defaults:{ease: 'power1.out'}})

    tl.to(".txt", { y : "0%", duration: 1, stagger: 0.30, delay: 0.75});
    tl.to(".slider",{ y : "-100%", duration: 1.5, delay: 1.2});
    tl.to(".intro",{y : "-100%", duration: 1}, "-=1");
    tl.to(".nav",{opacity : 1, duration: 1, delay: 0.5});
    tl.to(".heading",{opacity: 1, duration : 0.8 , delay: 0.3}, "-=1");
   
    const ham = document.querySelector('.hamburger');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');
    const bar3 = document.querySelector('.bar3');
    const navLinks = document.querySelector('.nav-links');
  

    ham.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        bar1.classList.toggle('burger1');
        bar2.classList.toggle('burger2');
        bar3.classList.toggle('burger3');
    })


const btn = document.querySelector('.navBtn');
   btn.addEventListener('click', ()=>{
     alert('not linked yet');
   })
  
   gsap.registerPlugin(ScrollTrigger);
   gsap.to(".p2image", {
    scrollTrigger: {
      trigger: ".main",
      end:"bottom",
      toggleActions:"restart reverse",
      scrub: true,
    },
    x : 0,
    duration: 0.05,
   });
   
  gsap.to(".no", {
    scrollTrigger:{
      trigger: ".page45",
      end:"center",
      toggleActions:"restart ",
    },
    x : 0,
    duration: 2,
  });

  gsap.to(".p45",{
    scrollTrigger:{
         trigger:".page45",
         end:"top",
         toggleActions:"restart ",
    },
    y : 0,
    duration: 1.5,
  });

  gsap.to(".p34cover", {
    scrollTrigger:{
        trigger:".page3",
        start: "center",
        toggleActions: "restart",
    },
    y : -350,
    duration: 1.2,
  });
  gsap.to(".p34content", {
    scrollTrigger:{
        trigger:".page3",
        start: "center",
        toggleActions: "restart",
    },
    opacity :1,
    duration: 2.5,
  });
   
