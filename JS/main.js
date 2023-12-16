const progress = document.querySelector('.progressText')
const percentage = document.querySelector('.progressText span')

let per = 0;
function progressLoad(){
    if(per>=100){
        progress.style.width = `100%`;
        percentage.innerHTML = "100%"

    }else{
        progress.style.width = `${per}%`;
        percentage.innerHTML = `${per}%`;

    }
    per++
}

setInterval(progressLoad,100)

const data = new Date();
let ano = data.getFullYear();
document.getElementById("copy").innerHTML = `&copy; ` + ano;