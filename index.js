const menuBox=document.getElementById("menuBox")
const openMenu=document.getElementById("openMenu")
const closeMenu=document.getElementById("closeMenu")
const menuFilter=document.getElementById("menuFilter")
const menuLinks=document.querySelectorAll(".menuLinks")

openMenu.addEventListener("click",function(){
    menuBox.style.right="0"
    menuFilter.classList.toggle("display-none")
})

closeMenu.addEventListener("click",function(){
    menuBox.style.right="-17rem"
    menuFilter.classList.toggle("display-none")
})

menuLinks.forEach(l=>l.addEventListener("click",function(){
    menuBox.style.right="-17rem"
    menuFilter.classList.toggle("display-none")
}))
