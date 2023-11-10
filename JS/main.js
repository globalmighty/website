const progress = document.querySelector('.progressText')
const percentage = document.querySelector('.progressText span')

let per = 0;
function progressLoad(){
    if(per>=50){
        progress.style.width = `50%`;
        percentage.innerHTML = "50%"

    }else{
        progress.style.width = `${per}%`;
        percentage.innerHTML = `${per}%`;

    }
    per++
}

setInterval(progressLoad,60)

const data = new Date();
let ano = data.getFullYear();
document.getElementById("copy").innerHTML = `&copy; ` + ano;