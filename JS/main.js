// const data = new Date();
// let ano = data.getFullYear();
// document.getElementById("copy").innerHTML = `&copy; ` + ano;

let lastPage = 'Inicio'
function getPoint(id) {
    if (id.slice(1) != lastPage) {
        document.getElementById(id.slice(1) + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + id.slice(1)).classList.remove('hiden');

        document.getElementById(lastPage + 'Nav').style.color = '#ffffff'
        document.getElementById('dot' + lastPage).classList.add('hiden');

        lastPage = id.slice(1)
    }
    console.log(document.getElementById("SobreNos").offsetWidth + 'px')
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}