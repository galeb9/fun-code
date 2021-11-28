// hamburger
const btnHam = document.getElementById("ham-btn");
const nav = document.getElementById("nav");

btnHam.addEventListener("click", () =>{
    nav.classList.toggle("active");
    btnHam.classList.toggle("active");

})

// toast notification
const toastBtn = document.querySelector("#toast-notif-btn");
const toastContainer = document.querySelector("#toasts")
const createNotification = () =>{
    const notif = document.createElement("div");
    notif.innerText="this is the notification! 📡" 
    notif.classList.add("toast");
    toastContainer.append(notif);

    setTimeout(()=>{
        notif.remove()
    }, 3000)

}
toastBtn.addEventListener("click", createNotification)

//  auto-write-text 
const autoWriteCont = document.querySelector("#auto-write-container");
const text = "You can do it, become a web developer  ";
let index = 0;
const writeText =() =>{
    const newBtn = document.createElement("button");
    newBtn.innerText="❌"
    newBtn.classList.add("cancelAutoWrite");
    autoWriteCont.insertAdjacentElement("beforebegin",newBtn);

    newBtn.addEventListener("click", function(){
        autoWriteCont.remove();
        newBtn.remove();
    });

    setInterval(() => {
        autoWriteCont.innerText = text.slice(0,index)
        index++;
        if(index > text.length){
            index = 0;
        }
    }, 100);
   
    
}
writeText();
// popup/modal
const openBtn =document.querySelector("#openBtn");
const closeBtn =document.querySelector("#closeBtn");
const popup =document.querySelector("#popup-container");

openBtn.addEventListener("click", ()=>{
    popup.classList.add("popUp")
})

closeBtn.addEventListener("click", ()=>{
    popup.classList.remove("popUp")
})
// crate hearts
const rainBtn = document.querySelector("#makeItRainBtn");
const rainInput = document.querySelector("#rainInput");
const rainContainer = document.querySelector("#rain-container");
let rain = true;
let intervalId;

rainBtn.addEventListener("click",()=>{
    if(rain){
        intervalId = setInterval(createHeart,300);
        rainBtn.innerText = "Cancel rain"
        rain = false;
    }else{
        clearInterval(intervalId);
        rainBtn.innerText = "Make it rain"
        rain = true;
    }
   
})
const createHeart = () =>{
    const heart = document.createElement("div")
    heart.classList.add("heart");
    heart.style.left = Math.random() *200 + "vh"
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"
    if(rainInput.value ===""){
        heart.innerText = "💜";
    }else{
        heart.innerText = rainInput.value;
    }

    document.body.append(heart)

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// background random change
const chBgBtn = document.querySelector("#ch-bg-btn");
chBgBtn.addEventListener("click", ()=>{
    document.body.style.background = randomBg();
});
const randomBg = () =>{
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}

// toggle mode
const toggle = document.querySelector("#toggle");
const labelDark = document.querySelector("#dark-mode label");
const allBtns = document.querySelectorAll("button");
toggle.addEventListener("change",(e)=>{
    document.body.classList.toggle("dark", e.target.checked);
    for(let btn of allBtns){
        btn.classList.toggle("dark", e.target.checked);
    }
    rainContainer.classList.toggle("dark", e.target.checked)
    nav.classList.toggle("dark", e.target.checked);
    if(e.target.checked){
        labelDark.innerText="Light mode 🌞";
    }else{
        labelDark.innerText="Dark mode 🌛"
    }
})

// carousel
const imageCont = document.querySelector("#image-container");
const allImgs = document.querySelectorAll("#image-container img");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");

let indx = 0;
const next = () =>{
    indx++;
    if(indx > allImgs.length-1){
        indx = 0;
    }
    imageCont.style.transform =`translateX(${-indx *500}px)`;
}
const back = () =>{
    indx--;
    if(indx < allImgs.length-1){
        indx = 0;
    }
    imageCont.style.transform =`translateX(${-indx *500}px)`;
}
// let ourInterval = setInterval(run,4000)
nextBtn.addEventListener("click",next);
backBtn.addEventListener("click",back)