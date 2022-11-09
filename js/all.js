import { gsap } from "../node_modules/gsap/all.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { TextPlugin } from "../node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// heroBanner動畫效果
gsap.from(".heroBanner",{y:1080 , duration:3});

setTimeout(function(){
  $('.login').find('a').addClass("active");
},3500)

$(".textLogin p").on("mouseenter",function(){
  $(this).find("a").addClass("active");
  $(this).siblings().find("a").removeClass("active");
})
// 三格對話框動畫
gsap.utils.toArray(".animation-wrapper").forEach((element) => {
  if (
    element.classList.contains("from-left") ||
    element.classList.contains("from-right")
  ) {
  hide(element); // 每個元素一進來都必須先隱藏

    ScrollTrigger.create({   //每一個元素遍歷都會創造對應的ScrollTrigger物件
     trigger: element,
      markers: false,
      onEnter: function () {
        animated(element); 
      },
      onEnterBack: function () {
        animated(element);
      },
      onLeave: function () {
        hide(element);
      },
    });
  }else if (element.classList.contains("text")){
    const typing1Content = "羨慕別人的酷酷網頁動畫...";
    const typing2Content = "滿足不了同事的許願...";
    const typing3Content = "動畫技能樹太雜無從下手...";
    const typing1_1Content = "I’m cool !";
    const typing2_1Content = "!@#$%...";

    gsap.to(".text-1", {
      text: typing1Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".text-1",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".text-1-1", {
      text: typing1_1Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".text-1-1",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".text-2", {
      text: typing2Content,
      duration: 1.5,
     scrollTrigger: {
       trigger: ".text-2",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".text-2-1", {
      text: typing2_1Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".text-2-1",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".text-3", {
      text: typing3Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".text-3",
        toggleActions: "play pause resume reset",
      },
    });
  } 


});

function animated(element){
  let x = 0;
  if(element.classList.contains("from-left")){
    x = -100;
  }else if(element.classList.contains("from-right")){
    x = 100;
  }
  element.style.transform = `translate(${x}px, 0px)`
  
  gsap.fromTo(
  element,{
    x: x, y: 0, opacity: 0, visibility: "hidden"
  },{
    duration: 1,
      delay: 0.2,
      x: 0,
      y: 0,
      visibility: "visible",
      opacity: "1",
      ease: "expo", // 元素的運動速度變化
      overwrite: "auto",
  })
}

function hide(element) {
  gsap.set(element, { opacity: 0, visibility: "hidden" });
}

gsap.fromTo(
  ".cursor",
  0,
  {
    visibility: "hidden",
  },
  {
    visibility: "visible",
    repeat: -1,
    yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
    repeatDelay: 0.3, // 下一次repeat的delay時間
  }
);

// 互動式網頁設計
const mql = window.matchMedia("(max-width:768px)"); 
const scrollTL1 = gsap.timeline({
  scrollTrigger:{
    trigger:".section2-bg",
    pin: true,
    markers: false,
    scrub: true,
  }
});
scrollTL1.to(".box-bg-1",{opacity: "0"});
scrollTL1.to(".title",{
  yPercent:'-80',
},"<")
scrollTL1.to(".bg-1",{
  yPercent:'10',
},"<")
scrollTL1.to(".bg-2",{
  yPercent:'50',
},"<")
scrollTL1.to(".bg-3",{
  yPercent:'50',
},"<")
scrollTL1.to(".box-bg-2",{opacity: "0"});
scrollTL1.to(".title",{
  yPercent:'-100',
},"<")
scrollTL1.to(".bg-1",{
  yPercent:'50',
},"<")
scrollTL1.to(".bg-2",{
  yPercent:'100',
},"<")
scrollTL1.to(".bg-3",{
  yPercent:'100',
},"<")
if(mql.matches){
  scrollTL1.to(".box-bg-1",{opacity: "0"});
  scrollTL1.to(".title",{
    yPercent:'-150',
  },"<")
  scrollTL1.to(".bg-1",{
    yPercent:'10',
  },"<")
  scrollTL1.to(".bg-2",{
    yPercent:'50',
  },"<")
  scrollTL1.to(".bg-3",{
    yPercent:'50',
  },"<")
  scrollTL1.to(".box-bg-2",{opacity: "0"});
  scrollTL1.to(".title",{
    yPercent:'-300',
  },"<")
  scrollTL1.to(".bg-1",{
    yPercent:'50',
  },"<")
  scrollTL1.to(".bg-2",{
    yPercent:'100',
  },"<")
  scrollTL1.to(".bg-3",{
    yPercent:'100',
  },"<")
}

// 每周活動介紹動畫
const scrollTL = gsap.timeline({
  scrollTrigger:{
    trigger:".section3",
    pin: true,
    markers: false,
    scrub: true,
  }
});
scrollTL.to(".gate-1",{xPercent:"-100"});
scrollTL.to(".gate-2",{xPercent:"-100"});
// 活動流程
const scrollTL4_1 = gsap.timeline({
  scrollTrigger:{
    trigger:".step1",
    markers: false,
    scrub: true,
    start: 'top 90%', // 決定動畫開始點的位置
    end: 'top 30%',
  }
});
scrollTL4_1.from(".section4-icon-hidden1",{opacity:0})

const scrollTL4_2 = gsap.timeline({
  scrollTrigger:{
    trigger:".step2",
    markers: false,
    scrub: true,
    start: 'top 90%', // 決定動畫開始點的位置
    end: 'top 30%',
  }
});
scrollTL4_2.from(".section4-icon-hidden2",{opacity:0})
const scrollTL4_3 = gsap.timeline({
  scrollTrigger:{
    trigger:".step3",
    markers: false,
    scrub: true,
    start: 'top 90%', // 決定動畫開始點的位置
    end: 'top 30%',
  }
});
scrollTL4_3.from(".section4-icon-hidden3",{opacity:0})
const scrollTL4_4 = gsap.timeline({
  scrollTrigger:{
    trigger:".step4",
    markers: false,
    scrub: true,
    start: 'top 80%', // 決定動畫開始點的位置
    end: 'top 65%',
  }
});
scrollTL4_4.from(".section4-icon-hidden4",{opacity:0})

// 比賽說明

gsap.to(".section5-text-1",{
  text: "區區修煉已經無法滿足了嗎？",
  duration: 1.5,
  scrollTrigger:{
    trigger:".section5",
    toggleActions: "play pause resume reset",
  }
});

gsap.to(".section5-text-2",{
  text: "還有比賽等著你！",
  duration: 1.5,
  delay:1.5,
  scrollTrigger:{
    trigger:".section5",
    toggleActions: "play pause resume reset",
  }
});


// 贊助商
gsap.to(".loop",{
  xPercent:"-100",
  ease:"none",
  duration:15,
  repeat:-1
})