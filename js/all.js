import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";

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
      markers: true,
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

gsap.to(".text", {
      text: "這裡是第一段", //text屬性將自動為DOM元素嵌入我們所輸入的文字
      duration: 1.5,
      scrollTrigger: {
				trigger: ".text",
        toggleActions: "play pause resume reset", //見備註
      },
    });

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
