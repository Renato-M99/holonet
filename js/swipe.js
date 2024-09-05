/* carrossel (swipe logic) */
const chars = Array.from(document.querySelectorAll(".char"));
const selectArea = document.querySelector(".selectChars");
const title = document.querySelector(".title");
const leftBtn = document.querySelector(".leftA");
const rightBtn = document.querySelector(".rightA");


/* current era */
let current = 0;
/* char count */
let c = 0;

/* Events */

rightBtn.addEventListener("click", () => {
  

    nextEra();
    changeSelection();
    
})
leftBtn.addEventListener("click", () => {

   

    prevEra();
    changeSelection();

})

/* Functions */

function nextEra() {
    if (current >= 0 && current < 3) {
        current++;

    }
    else if (current == 3) {
        current = 0;
    }

 

  

}

function prevEra() {
    if (current >= 1) {
        current--;

    }
    else {

        current = 3;

    }
   

}


function changeSelection() {
    selectArea.innerHTML = '';
    title.innerHTML = '';

    title.innerHTML = `<h2>${era[current].eraTitle}</h2>`;



    item.forEach(()=>{

        if(current == item[c].era
        ){
            let cImg = document.createElement("img");
            cImg.classList.add("char");
            cImg.classList.add(item[c].align);

            cImg.src = item[c].charImg;
            cImg.setAttribute("data-key", c);
            cImg.setAttribute("data-name", item[c].name);
          
           
     
            selectArea.append(cImg);

            c++;

            
         
        }
      


        
    })
 
  


}



function clearSelection() {
   
    while (chars.length - 1 <= 8) {

        chars.pop();
     

    }
   
}






/* selectArea.innerHTML = `<img data-key="${c}" data-name="${item[c].name}"  src="${item[c].charImg}">`; */




/* 
    while (chars.length - 1 <= 8) {

        if (current == item[c].era) {
            let cImg = document.createElement("img");
            cImg.classList.add("char");
            cImg.classList.add(item[c].align);

            cImg.src = item[c].charImg;
            cImg.setAttribute("data-key", c);
            cImg.setAttribute("data-name", item[c].name);

            chars.push(cImg);
            selectArea.append(cImg);

            c++;
            console.log(chars)
        }
        else{
            alert("erro");
        }
    } */