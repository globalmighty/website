const progress = document.querySelector('.progressText')
const percentage = document.querySelector('.progressText span')

let per = 0;
function progressLoad(){
    if(per>=80){
        progress.style.width = `80%`;
        percentage.innerHTML = "80%"

    }else{
        progress.style.width = `${per}%`;
        percentage.innerHTML = `${per}%`;

    }
    per++
}

setInterval(progressLoad,80)

const data = new Date();
let ano = data.getFullYear();
document.getElementById("copy").innerHTML = `&copy; ` + ano;