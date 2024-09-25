const fontSizes = document.querySelector("#font-size");
// const fontBold = document.querySelector(".bold");
// const fontItalic = document.querySelector(".italic");
// const underLine = document.querySelector(".underline");
// const alignLeft = document.querySelector(".align-left");
// const alignCenter = document.querySelector(".align-center");
// const alignRight = document.querySelector(".align-right");
// const textTransform = document.querySelector(".text-transformation");
// const textSlash = document.querySelector(".text-slash");
// const color = document.querySelector(".color");
const textArea = document.querySelector("#textarea1");


function f1(e){
    let value = e.value;
    textArea.style.fontSize = value + "px";
}

function f2(e){
    if(textArea.style.fontWeight == "bold"){
        textArea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else{
        textArea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function f3(e){
    if(textArea.style.fontStyle == "italic"){
        textArea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else{
        textArea.style.fontStyle = "italic";
        e.classList.add("active");
    }
} 

function f4(e){
    if(textArea.style.textDecoration == "underline"){
        textArea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else{
        textArea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f5(e){
    textArea.style.textAlign = "left";
}

function f6(e){
    textArea.style.textAlign = "center";
}

function f7(e){
    textArea.style.textAlign = "right";
}

function f8(e){
    if(textArea.style.textTransform == "uppercase"){
        textArea.style.textTransform = "none";
    }
    else{
        textArea.style.textTransform = "uppercase";
    }
}

function f9(){
    textArea.style.fontWeight = "normal";
    textArea.style.fontStyle = "normal";
    textArea.style.textAlign = "left";
    textArea.style.textTransform = "capitalize";
    textArea.value = "";
}

function f10(e){
    let value = e.value;
    textArea.style.color = value;
}

window.addEventListener('load', () => {
    textArea.value = "";
});