// camelcase
function gerarQRcode() {
   let texto=document.getElementById("texto").value;
   let qrcode=document.getElementById("qrcode");

qrcode.innerHTML = ""

if (texto == ""){
    alert("digite um texto ou link")
    return;
}

new QRCode(qrcode,{
    text:texto,
    width:200,
    heigth:200
})
}
