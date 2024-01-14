const apiurl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
const imgbox = document.querySelector(".imgbox")
const qrimg = document.getElementById("qrimg")
const qrtext = document.getElementById("qrtext")

function getqr(){
    if(qrtext.value.length>0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value
        qrimg.classList.add("shadow-drop-2-center")
    }
    else{
        alert("please enter a url or text")
    }
}