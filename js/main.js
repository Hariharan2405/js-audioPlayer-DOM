var a=[
    {
        tit:"one",
        ado:"./audio/dbz.mp3",
        img:"./image/dbz.jpg"
    },
    {
        tit:"two",
        ado:"./audio/naruto.mp3",
        img:"./image/naruto.jpg"
    },
    {
        tit:"three",
        ado:"./audio/op.mp3",
        img:"./image/op.jpg"
    },
]


var img=document.querySelector(".image");
var play=document.querySelector(".play");
var pause=document.querySelector(".pass");
var pre=document.querySelector(".pre");
var next=document.querySelector(".next");

var ad=new Audio(a[0].ado);
img.src=a[0].img

var count=0;
next.addEventListener("click",function(){
    count++;
    ad.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
    pre.style.color="#000"
    if(count<a.length){
        ad=new Audio(a[count].ado);
        img.src=a[count].img
    }
    else{
        count=a.length-1
        next.style.color="#ccc"
    }
});

pre.addEventListener("click",function(){
    count--;
    ad.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
    next.style.color="#000"
    if(count>=0){
        ad=new Audio(a[count].ado);
        img.src=a[count].img
    }
    else{
        count=0;
        pre.style.color="#ccc"
    }
});

play.addEventListener("click",function(){
    ad.play();
    play.classList.add("hide");
    pause.classList.remove("hide");
});
pause.addEventListener("click",function(){
    ad.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
});
