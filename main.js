//slider items
var sliderImages=Array.from(document.querySelectorAll(".slider-container img"));

//number of slide
var slidesCount=sliderImages.length;

let indicators=document.querySelector(".indicators");
let ul=document.createElement("ul");
for (let i=1 ; i<slidesCount+1; i++){
    li=document.createElement("li");
    li.classList.add(`index-${i}`);
    li.style.cssText="transition:0.6s";
    textLi=document.createTextNode(i);
    li.appendChild(textLi);
    ul.appendChild(li);
}
indicators.appendChild(ul);

let currentImage=0;

let SlideNum=document.querySelector(".slide-number");

let nextBtn=document.querySelector(".next");
let prevBtn=document.querySelector(".prev");

nextBtn.onclick=NextImg;
prevBtn.onclick=PrevImg;

function Remove(){
    sliderImages.forEach((ele)=>{
        if(ele.className=="active"){
            ele.classList.remove("active");
        }
    })
}

function check(){
    if(currentImage!=slidesCount){
        nextBtn.classList.remove("disable");
    }
    if(currentImage!=0){
        prevBtn.classList.remove("disable");
    }
    if(currentImage>=slidesCount-1){
        nextBtn.classList.add("disable");
    }
    if(currentImage==0){
        prevBtn.classList.add("disable");
    };
}

function list(){
    listt=document.querySelectorAll(".indicators ul li");
    listt.forEach((ele)=>{
        if(ele.className==`index-${currentImage+1}`){
            ele.classList.add("active");
        }else{
            ele.classList.remove("active");
        }
    })
}

function Slider(){
    numSlide=document.querySelector(".slide-number");
    textNum=document.createTextNode(`slide #${currentImage+1}`);
    numSlide.innerHTML='';
    numSlide.appendChild(textNum);
}

function NextImg(){
    Remove();
    currentImage++;
    check();
    list();
    Slider();
    sliderImages[currentImage].classList.add("active");
};

function PrevImg(){
    Remove();
    currentImage--;
    check();
    list();
    Slider();
    console.log(currentImage);
    sliderImages[currentImage].classList.add("active");
};

let listt=Array.from(document.querySelectorAll(".indicators ul li"));

listt.forEach((ele,index)=>{
    ele.onclick=function(){
        for (let i=0 ; i<listt.length;i++){
            listt[i].classList.remove("active");
        }
        Remove();
        ele.classList.add("active");
        sliderImages[index].classList.add("active");
        currentImage=index;
        Slider();
        check()
    }
})
window.onload=()=>{
    sliderImages[0].classList.add("active");
    listt[0].classList.add("active");
    Slider();
}