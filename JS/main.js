// const data = new Date();
// let ano = data.getFullYear();
// document.getElementById("copy").innerHTML = `&copy; ` + ano;

let lastPage = 'Inicio'
function getPoint(id) {
    if (id.slice(1) != lastPage) {

        console.log(id.slice(1))
        document.getElementById(id.slice(1) + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + id.slice(1)).classList.remove('hiden');
        document.getElementById(lastPage + 'Nav').style.color = '#ffffff'
        document.getElementById('dot' + lastPage).classList.add('hiden');
        lastPage = id.slice(1)
    }
    document.querySelector(id + 'Section').scrollIntoView({
        behavior: 'smooth'
    });
}