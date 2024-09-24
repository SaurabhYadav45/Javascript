const qrText = document.querySelector("#qrText");
const qrImg = document.querySelector("#qrImage");
const qrError = document.querySelector("#qrError");



function qrGenerator(){
    if(qrText.value){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;
    }
    else{
        // qrError.src = "istockphoto-1319148638-612x612.jpg";
    }
}