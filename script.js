// MENU
const menubtn = document.getElementById('menubtn')
const menu = document.getElementById('menu')
menubtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});

// INPUT RANGE
function updateSliderColors() {
    document.querySelectorAll('input.slider').forEach(input => {
        const min = parseFloat(input.min)
        const max = parseFloat(input.max)
        const val = parseFloat(input.value)
        const percentage = ((val - min) / (max - min)) * 100
        input.style.background = `linear-gradient(to right, #1b63ed ${percentage}%, #d3d3d3 ${percentage}%)`
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
let depozitSimvol = '₼'
let depozitOdemeMuddeti = 'ay'

function depozitOdemeDeyis(muddet) {
    const btnAy = document.getElementById('btn-ay')
    const btnIl = document.getElementById('btn-il')
    depozitOdemeMuddeti = muddet

    if (muddet === 'ay') {
        btnAy.classList.add('btn-active')
        btnIl.classList.remove('btn-active')
    } else {
        btnIl.classList.add('btn-active')
        btnAy.classList.remove('btn-active')
    }
    hesablaDepozit()
}

function depozitValyutaDeyis(val) {
    const btnAzn = document.getElementById('btn-azn')
    const btnUsd = document.getElementById('btn-usd')

    if (val === 'AZN') {
        depozitSimvol = '₼';
        btnAzn.classList.add('btn-active')
        btnUsd.classList.remove('btn-active')
    } else {
        depozitSimvol = '$'
        btnUsd.classList.add('btn-active')
        btnAzn.classList.remove('btn-active')
    }
    hesablaDepozit()
}

function hesablaDepozit() {
    let mebleg = parseFloat(document.getElementById("d-mebleg").value)
    let muddet = parseFloat(document.getElementById("d-muddet").value)
    let illikFaiz = 8

    document.getElementById("d-meblegtxt").innerHTML = mebleg
    document.getElementById("d-muddettxt").innerHTML = muddet
    document.querySelectorAll('.d-simvol').forEach(el => el.innerHTML = depozitSimvol)

    let umumiQazanc = mebleg * (illikFaiz / 100) * (muddet / 12)
    let ayliqQazanc = (mebleg * (illikFaiz / 100)) / 12

    document.getElementById("d-qazanc").innerHTML = umumiQazanc.toFixed(2)
    const label = document.getElementById("d-odenis-label")
    const outputSpan = document.getElementById("d-ayliq")
    if (depozitOdemeMuddeti === 'ay') {
        label.innerHTML = "Hər ay ödənilən faiz:"
        outputSpan.innerHTML = ayliqQazanc.toFixed(2)
    } else {
        label.innerHTML = "Hər il ödənilən faiz:"
        outputSpan.innerHTML = umumiQazanc.toFixed(2)
    }
}

// AVTOMOBIL
function avtoNovuDeyis(nov) {
    const btnElec = document.getElementById('btn-elektrik')
    const btnHybrid = document.getElementById('btn-hibrid')
    const btnOther = document.getElementById('btn-diger')
    const inputIlkin = document.getElementById('a-ilkin')
    const minTxt = document.getElementById('a-ilkin-min-txt');
    [btnElec, btnHybrid, btnOther].forEach(btn => btn.classList.remove('btn-active'))
    let minPercent = 20

    if (nov === 'elektrik') {
        btnElec.classList.add('btn-active')
        minPercent = 10
    } else if (nov === 'hibrid') {
        btnHybrid.classList.add('btn-active')
        minPercent = 20
    } else if (nov === 'diger') {
        btnOther.classList.add('btn-active')
        minPercent = 40
    }

    inputIlkin.min = minPercent
    inputIlkin.max = 90
    minTxt.innerHTML = minPercent + " %"

    if (parseInt(inputIlkin.value) < minPercent) {
        inputIlkin.value = minPercent
    }
    
    updateSliderColors()
    hesablaAvto()
}

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
