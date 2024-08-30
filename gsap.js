gsap.from('.box1',{
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.4,
    x: 300,
    repeat:-1,
    yoyo: true
})
gsap.to('.box', {
    x: 300,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo:true,
    scale:0.3,
    borderRadius:"50%"

})

var tl=gsap.timeline()

tl.to('.boxes1', {
    x:300,
    duration:1,
    scale:0.5,
    delay:1
})
tl.to('.boxes2', {
    x:300,
    duration:1,
    scale:0.5,
    delay:1
})
