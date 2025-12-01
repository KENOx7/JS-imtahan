// INPUT RANGE
function updateSliderColors() {
    document.querySelectorAll('input.slider').forEach(input => {
        const min = parseFloat(input.min);
        const max = parseFloat(input.max);
        const val = parseFloat(input.value);
        const percentage = ((val - min) / (max - min)) * 100;
        input.style.background = `linear-gradient(to right, #1b63ed ${percentage}%, #d3d3d3 ${percentage}%)`;
    });
}

// KREDIT
function hesablaKredit() {
    let mebleg = document.getElementById("k-mebleg").value
    let muddet = document.getElementById("k-muddet").value
    let faiz = document.getElementById("k-faiz").value

    document.getElementById("k-meblegtxt").innerHTML = mebleg
    document.getElementById("k-muddettxt").innerHTML = muddet
    document.getElementById("k-faiztxt").innerHTML = faiz

    let r = (faiz / 100) / 12
    let x = Math.pow(1 + r, muddet)
    let ayliq = (mebleg * r * x) / (x - 1)
    document.getElementById("k-ayliq").innerHTML = ayliq.toFixed(2)
}

// DEPOZIT
function hesablaDepozit() {
    let mebleg = document.getElementById("d-mebleg").value
    let muddet = document.getElementById("d-muddet").value
    let illikFaiz = 8

    document.getElementById("d-meblegtxt").innerHTML = mebleg
    document.getElementById("d-muddettxt").innerHTML = muddet

    let qazanc = mebleg * (illikFaiz / 100) * (muddet / 12)
    let ayliq = (mebleg * (illikFaiz / 100)) / 12
    document.getElementById("d-qazanc").innerHTML = qazanc.toFixed(2)
    document.getElementById("d-ayliq").innerHTML = ayliq.toFixed(2)
}

// AVTOMOBIL
function hesablaAvto() {
    let qiymet = document.getElementById("a-qiymet").value
    let ilkinFaiz = document.getElementById("a-ilkin").value
    let muddet = document.getElementById("a-muddet").value
    let illikFaiz = 14

    document.getElementById("a-qiymettxt").innerHTML = qiymet
    document.getElementById("a-meblegtxt").innerHTML = ilkinFaiz
    document.getElementById("a-muddettxt").innerHTML = muddet

    let ilkinodenis = qiymet * (ilkinFaiz / 100)
    let bankmenbleg = qiymet - ilkinodenis
    let komissiya = bankmenbleg * 0.005

    document.getElementById("a-mebleg").innerHTML = ilkinodenis
    document.getElementById("a-kredit").innerHTML = bankmenbleg
    document.getElementById("a-komissiya").innerHTML = komissiya.toFixed(0)

    let r = (illikFaiz / 100) / 12
    let x = Math.pow(1 + r, muddet)
    let ayliq = (bankmenbleg * r * x) / (x - 1)
    document.getElementById("a-ayliq").innerHTML = ayliq.toFixed(2)
}

// IPOTEKA
function hesablaIpoteka() {
    let mebleg = document.getElementById("i-mebleg").value
    let il = document.getElementById("i-muddet").value
    let faiz = document.getElementById("i-faiz").value

    document.getElementById("i-meblegtxt").innerHTML = mebleg
    document.getElementById("i-muddettxt").innerHTML = il
    document.getElementById("i-faiztxt").innerHTML = faiz
    document.getElementById("i-son-mebleg").innerHTML = mebleg
    document.getElementById("i-son-faiz").innerHTML = faiz

    let aylar = il * 12
    let r = (faiz / 100) / 12
    let x = Math.pow(1 + r, aylar)
    let ayliq = (mebleg * r * x) / (x - 1)

    document.getElementById("i-ayliq").innerHTML = ayliq.toFixed(2)
}

// KONVERTOR
function hesablaValyuta() {
    let pul = document.getElementById("pul").value
    let val1 = document.getElementById("secim1").value
    let val2 = document.getElementById("secim2").value
    let azn = pul * val1
    let son = azn / val2
    document.getElementById("pul2").value = son.toFixed(2)
}

function hesablaValyuta2() {
    let pul2 = document.getElementById("pul2").value
    let val1 = document.getElementById("secim1").value
    let val2 = document.getElementById("secim2").value
    let azn = pul2 * val2
    let son = azn / val1
    document.getElementById("pul").value = son.toFixed(2)
}

// PUL SWIPE
function cevir() {
    let secim1 = document.getElementById("secim1")
    let secim2 = document.getElementById("secim2")
    let x = secim1.value
    secim1.value = secim2.value
    secim2.value = x
    hesablaValyuta()
}

document.addEventListener('input', (e) => {
    if(e.target.classList.contains('slider')) {
        updateSliderColors(); 
    }
});

hesablaKredit()
hesablaDepozit()
hesablaAvto()
hesablaIpoteka()
hesablaValyuta()
updateSliderColors() 
