const container = document.querySelector(".container");
const color = document.querySelector(".color");
let draw = false;
const sizeElement = document.querySelector(".size");
let size = sizeElement.value;
const resetBtn = document.querySelector(".reset-btn")
const promptDiv = document.querySelector(".promt")


function setSize (size) {
    container.style.setProperty("--size", size);
    for (let i=0; i < size * size; i++){
    const div = document.createElement("div");
    div.classList.add("box")
    container.appendChild(div);

    div.addEventListener('mouseover', ()=>{
        if (!draw) return
        div.style.backgroundColor = color.value;
    })

    div.addEventListener("mousedown", ()=> {
        div.style.backgroundColor = color.value;
        draw = true;
    })    

    container.appendChild(div);
}    
}
window.addEventListener("mousewdown", () => {
    draw = true;
})
window.addEventListener("mouseup", () => {
    draw = false;
})

resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
    setSize(size);
});

sizeElement.addEventListener("keyup", () =>{
    size = sizeElement.value
    if(size>=2 && size <=50) {
    setSize (size);  }
    else { 
     promptDiv.innerHTML = "Set the number from 2 to 50!"
    }   


})


setSize (size); 