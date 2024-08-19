function init(){
    const hamburger = document.querySelector(".hamburger");
const sidebarCloseButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");

const opensidebar = () => {
  sidebarContainer.classList.add("show-sidebar");
};

hamburger.addEventListener("click", opensidebar);

const closesidebar = () => {
  sidebarContainer.classList.remove("show-sidebar");
};
sidebarCloseButton.addEventListener("click", closesidebar);
}
init();


function navRelatedCode(){
    const navbarContainer=document.querySelector(".nav-container");
window.addEventListener("scroll",function(){
    const scrollNumber=window.scrollY;
    
    const targetNumber=window.innerWidth >= 992 ? 70 :50;
    if(scrollNumber>=targetNumber)
    {
        navbarContainer.classList.add("sticky-nav");
    }
    else{
        navbarContainer.classList.remove("sticky-nav");
    }
    
    
})
}
navRelatedCode();