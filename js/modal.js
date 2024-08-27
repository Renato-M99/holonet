const modal = document.querySelector(".selectCards");
const click = document.querySelectorAll(".char");
let x = `<i class="fa-solid fa-x x"></i>`;
let closeBtn = document.createElement('i');

let index= 0;

/* open modal */
click.forEach(i =>{
    i.addEventListener("click", (e)=>{
        modal.style.display = "block";
         
        createModal(i);
    })
   
})

/* close modal */
/* document.querySelector('.x').addEventListener('click', closeModal()); */

function createModal(element){
   
    index = element.getAttribute("data-id");
    modal.innerHTML = `<div class="content">
                    
                    <div class="contentLeft">
                       <img src="${item[index].img}" alt="">
                        <h2>${item[index].name}</h2>
                    </div>
                    <div class="contentRight">
                        <h3>${item[index].h3}</h3>
                        <h4>${item[index].h4}</h4>
                        <p>${item[index].p}</p>
                    </div>
                    <i onclick="closeModal()" class="fa-solid fa-x x"></i>
                </div>`;

                
}


function closeModal(){
    modal.style.display = "none";
   
}