const modal = document.querySelector(".modal");
const openmodalButton = document.querySelector(".openmodalButton");
const closemodalButton = document.querySelector(".closemodalButton");

const openmodal= ()=>{ 
    modal.classList.remove("close");
};

const closemodal= ()=>{ 
    modal.classList.add("close");
}



openmodalButton.addEventListener("click",()=>{
    openmodal();
});

closemodalButton.addEventListener("click",()=>{
   closemodal();
})
