const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button')
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue){
        alert('Insira um texto!')
        return;
    }
    generateBtn.innerText = "Gerando um QR Code...";
    qrImg.src = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${qrValue}`
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar QR CODE";
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
});
