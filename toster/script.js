function createToster(config){
    return function(notification){
        let div=document.createElement("div");
        div.textContent=notification;
        div.className=`inline-block ${config.theme=='dark'?"bg-gray-800 text-white":"bg-gray-100 text-black"} px-6 py-3 rounded-full shadow-lg pointer-events-none`;

        document.querySelector(".parent").appendChild(div);

        if(config.positionX != "left"|| config.positionY != "top"){
            document.querySelector(".parent").className+=` ${config.positionX === "left" ? "left-5" : "right-5"} ${config.positionY === "top" ? "top-5" : "bottom-5"}`
          
        }

        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div);
        },config.duration * 1000);
    }
}


const btn=document.querySelector(".CHANGEBTN");
btn.addEventListener("click",()=>{
    const content=document.querySelector(".CONTENT");
  content.style.backgroundColor === "rgb(255, 255, 255)" ?
    content.style.backgroundColor = "rgba(61, 56, 56, 0.66)" 
 
    :content.style.backgroundColor = "rgb(255, 255, 255)";
})


let toaster=createToster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});

toaster("welcome to toaster checking......");
setTimeout(()=>{
    toaster("created by : PRIYANSHU PANT.....");
},2000)