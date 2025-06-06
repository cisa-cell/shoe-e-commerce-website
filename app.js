

document.addEventListener("DOMContentLoaded", () => {
    const wrapper=document.querySelector(".sliderWrapper");
    const menuItems=document.querySelectorAll(".menuItem");
    menuItems.forEach((item, index)=>{
        item.addEventListener("click",()=>{
            console.log("we've clicked on an item");
            wrapper.style.transform=`translateX(${-100*index}vw)`;
        });
    });
});
// - is domcontentloaded smth we made up?
// - add event listerner Syntax  
// - no = but rather =>
// - slider, sliderWrapper, menuItems
// - index is a keyword
// - we provide the options of capture, target and bubble
//by giving element before .addEventListener

//!analogies
// | Phase   | Analogy                            | DOM Equivalent                          |
// |---------|------------------------------------|-----------------------------------------|
// | Capture | Letter falling down each floor     | Event travels from root to target       |
// | Target  | Letter lands in recipient’s hands  | Event at the target element             |
// | Bubble  | Shout travels up the stairwell     | Event bubbles from target back to root  |



//!Application
/*
!When you click the button:
The event travels down (capture phase): OUTER → MIDDLE
The event reaches the target: INNER
The event travels up (bubble phase): MIDDLE → OUTER

that is the element at which the event has to be listened determines
the phase in which the event is listened to. If we specify the if of an element within which the 
actual button is present then it is capture. If no element is specified or the id of the 
button is specified then it is target phase.
.for the bubble phase, we will have to have called the outer 
and target element and then call the middle or outer
element*/

