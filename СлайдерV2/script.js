let names = document.querySelectorAll(".names")
let circles = document.querySelectorAll(".circle")
let images = document.querySelectorAll(".img")
let arrL = document.getElementById("arLeft")
let arrR = document.getElementById("arRight")

names[0].classList.add("active_name")
circles[0].classList.add("active_circle")
images[0].classList.add("active_img")

let counter = 0

for(let i = 0; i < names.length;i++){
    names[i].addEventListener("click", () => {
        for(let j = 0; j < names.length; j++){
            names[j].classList.remove("active_name")
            circles[j].classList.remove("active_circle")
            images[j].classList.remove("active_img")
        }
        counter = i;
        names[counter].classList.add("active_name");
        circles[counter].classList.add("active_circle")
        images[counter].classList.add("active_img")
    })
}

for(let i = 0; i < circles.length; i++){
    circles[i].addEventListener("click", () => {
        for(let j = 0; j < circles.length; j++){
            names[j].classList.remove("active_name")
            circles[j].classList.remove("active_circle")
            images[j].classList.remove("active_img")
        }
        counter = i;
        names[counter].classList.add("active_name");
        circles[counter].classList.add("active_circle")
        images[counter].classList.add("active_img")
    })
}

arrL.addEventListener("click", () => {
    for(let i = 0; i < circles.length; i++){
        names[i].classList.remove("active_name")
        circles[i].classList.remove("active_circle")
        images[i].classList.remove("active_img")    
    }
    counter--
    if(counter < 0){
        counter = circles.length-1
    }
    names[counter].classList.add("active_name");
    circles[counter].classList.add("active_circle")
    images[counter].classList.add("active_img")

})
arrR.addEventListener("click", () => {
    for(let i = 0; i < circles.length; i++){
        names[i].classList.remove("active_name")
        circles[i].classList.remove("active_circle")
        images[i].classList.remove("active_img")    
    }
    counter++
    if(counter > circles.length-1){
        counter = 0
    }
    names[counter].classList.add("active_name");
    circles[counter].classList.add("active_circle")
    images[counter].classList.add("active_img")

})