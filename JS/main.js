const progress = document.querySelector('.progress')
const percentage = document.querySelector('.progress span')

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

setInterval(progressLoad,90)