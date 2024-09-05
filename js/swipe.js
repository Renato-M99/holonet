const charDiv = document.querySelector(".selectContent");
const nextBtn = document.querySelector(".rightA");
const prevBtn = document.querySelector(".leftA");
const title = document.querySelector(".title");
let current = 0;

nextBtn.addEventListener('click', nextEra);
prevBtn.addEventListener('click', prevEra);




function nextEra(){
    if (current >= 0 && current < 3) {
        current++;
    }
    else if (current == 3) {
        current = 0;
    }
/*     clearChars(); */
    insertChars();
}
function prevEra(){
    if (current >= 1) {
        current--;

    }
    else {
        current = 3;
    }
    
    insertChars();
}

function insertChars(){
    clearChars();
    title.innerHTML = `<h2>${era[current].eraTitle}</h2>`;

    

    for(let i = 0; i <= item.length; i++){

        if(current === item[i].era){
            let cImg = document.createElement('img');
            cImg.src = `${item[i].charImg}`;
            cImg.classList.add("char");
            cImg.classList.add(item[i].align);

            cImg.setAttribute("data-key", i);
            cImg.setAttribute("data-name", item[i].name);
            charDiv.append(cImg);
        }

        console.log(i)
       
    }
    
}

function clearChars(){
    title.innerHTML = '';
    document.querySelectorAll(".char").forEach(()=>{
        document.querySelector(".char").innerHTML = '';
    }
    
    )
    charDiv.innerHTML = '';
}



