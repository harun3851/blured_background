const containerEl= document.querySelector(".container");
const btnEl=document.querySelector(".btn");
const popupContainerEl=document.querySelector(".popup-container");
const closeIconEl=document.querySelector(".close-icon");
btnEl.addEventListener("click",()=>{
    popupContainerEl.classList.remove("active");

});
closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
  });