

//-------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
        let products=[
        {
            id:1,
            title:"Air Force",
            price: 119, 
            desc:"air force is a type of shoe that is designed for comfort and performance. It features a lightweight, breathable upper and a cushioned sole for maximum support.",
            colors:[
                {
                    code:"lightpink",
                    img: "images/air_force_light_pink-removebg-preview.png"
                },
                {
                    code:"brown",
                    img:"images/air_force_coffee-removebg-preview.png"
                }
            ]
        },
        {
            id:2,
            title:"Crater",
            price:299,
            desc:"crater is a type of shoe that is designed for outdoor activities. It features a rugged sole and a durable upper for maximum protection and support.",
            colors:[
                {
                    code:"pink",
                    img: "images/crater_pink-removebg-preview.png"
                },
                {
                    code:"lightgreen",
                    img:"images/crater_light_green-removebg-preview.png"
                }
            ]
        },

        {
            id:3,
            title:"Hippie",
            price: 99, 
            desc:"hippie is a type of shoe that is designed for outdoor activities. It features a rugged sole and a durable upper for maximum protection and support.",
            colors:[
                {
                    code:"brown",
                    img: "images/hippie-removebg-preview.png"
                },
                {
                    code:"white",
                    img:"images/hippie_white-removebg-preview.png"
                }
            ]
        },
        
        {
            id:4,
            title:"Blazer",
            price: 200, 
            desc:"blazer is a type of shoe that is designed for casual wear. It features a low-top design and a cushioned sole for maximum comfort.",
            colors:[
                {
                    code:"pink",
                    img: "images/blazer_pink-removebg-preview.png"
                },
                {
                    code:"blue",
                    img:"images/blazer_blue-removebg-preview.png"
                }
            ]
        },
        {
            id:5,
            title:"Air Jordan",
            price: 200, 
            desc:"air jordan is a type of shoe that is designed for basketball players. It features a high-top design for ankle support and a cushioned sole for maximum comfort.",
            colors:[
                {
                    code:"brown",
                    img: "images/jordan_brown-removebg-preview.png"
                },
                {
                    code:"blue",
                    img:"images/jordan_blue-removebg-preview.png"
                }
            ]
        },
    ]

    let currentProduct=products[0];



    const currentProductImg=document.querySelector(".productImg");
    const currentProductTitle=document.querySelector(".productTitle"); 
    const currentProductPrice=document.querySelector(".productPrice");
    const currentProductDesc=document.querySelector(".productDesc");
    const currentProductColors=document.querySelectorAll(".color");
    const currentProductSizes=document.querySelectorAll(".size");
    const productButton=document.querySelector(".productButton");
    const wrapper=document.querySelector(".sliderWrapper");
    const menuItems=document.querySelectorAll(".menuItem");
    menuItems.forEach((item, index)=>{
        item.addEventListener("click",()=>{
            console.log("we've clicked on an item");
            wrapper.style.transform=`translateX(${-100*index}vw)`;

            //changing product
            currentProduct=products[index];

            //changing details
            currentProductImg.src=currentProduct.colors[0].img;
            currentProductTitle.textContent=currentProduct.title;   
            currentProductPrice.textContent=`$${currentProduct.price}`;
            currentProductDesc.textContent=currentProduct.desc; 
            currentProductColors.forEach((color, colorIndex) => {
                color.style.backgroundColor = currentProduct.colors[colorIndex].code;
            });

        });
    });
});


// ? ----------------------------------------------document.addEventListener-------------------------------------------------------------------------
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

