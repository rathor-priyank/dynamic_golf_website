var crs=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})

gsap.to("#nav",{
    backgroundColor :"#000",
    height :"110px",
    duration :0.5,
    scrollTrigger :{
        trigger: "#nav",
        scroller: "body",
        markers:true,
        start :"top -10%",
        end :"top -12%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger :{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start :"top -30%",
        end :"top -90%",
        scrub :2
    }
})

gsap.from("#about",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger :{
        trigger:"#about",
        scroller:"body",
        markers:true,
        start :"top 60%%",
        end :"top 55%",
        scrub :3
    }
})

// gsap.from("#cards",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger :{
//         trigger:"#cards",
//         scroller:"body",
//         markers:true,
//         start :"top 70%%",
//         end :"top 65%",
//         scrub :2
//     }
// })