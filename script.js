let startmenu = document.getElementsByClassName("startmenu")[0];
let taskbar = document.getElementsByClassName("taskbar")[0];
taskbar.addEventListener("click",()=>{
    if(startmenu.style.bottom=="65px")
    {
     startmenu.style.bottom="-800px";
    }
    else{
     startmenu.style.bottom="65px";
    }
})
