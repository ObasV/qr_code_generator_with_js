const input = document.getElementById("inputText");
const generate = document.getElementById("generateBtn");
const siteName = document.getElementById("siteName");

input.addEventListener('blur', () => {
    const address = input.value;
    siteName.innerText = address    ;
})


generate.addEventListener("click", () => {

    // Clear previous QR code if it exists
    const qrCodeContainer = document.getElementById("qrCode");
    qrCodeContainer.innerHTML = "";

    // Generate new QR code    
    const qrCode = new QRCode(document.getElementById("qrCode"), {
    text: input.value,
    width: 300,
    height: 300,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

    input.value = "";
});   







