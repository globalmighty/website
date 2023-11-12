// const data = new Date();
// let ano = data.getFullYear();
// document.getElementById("copy").innerHTML = `&copy; ` + ano;

let lastPage = 'home'
function getPoint(id) {
    if (id.slice(1) != lastPage) {
        document.getElementById(id.slice(1)).style.color = '#B8E4FE'
        document.getElementById(lastPage).style.color = '#ffffff'
        lastPage = id.slice(1)
    }
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });

}