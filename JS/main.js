// const data = new Date();
// let ano = data.getFullYear();
// document.getElementById("copy").innerHTML = `&copy; ` + ano;

let lastPage = 'Home'
function getPoint(id) {
    if (id.slice(1) != lastPage) {
        if (id.slice(1) != 'Servicos') {
            document.getElementById('Servicos').style.marginLeft = '30px'
        } 
        else {
            document.getElementById('Servicos').style.marginLeft = '40px'
        }
        document.getElementById(id.slice(1)).style.color = '#B8E4FE'
        document.getElementById('dot' + id.slice(1)).classList.remove('hiden');
        document.getElementById(lastPage).style.color = '#ffffff'
        document.getElementById('dot' + lastPage).classList.add('hiden');
        lastPage = id.slice(1)
    }
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}