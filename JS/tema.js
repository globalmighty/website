let tema = 'dark'
function changeTema() {
    if (tema == 'light') {
        tema = 'dark'
        document.getElementsByTagName("body")[0].classList.remove('light')
        document.getElementsByTagName("body")[0].classList.add('dark')
        document.getElementById("logoLight").classList.add('hiden')
        document.getElementById("logoDark").classList.remove('hiden')
    }
    else {
        tema = 'light'
        document.getElementsByTagName("body")[0].classList.remove('dark')
        document.getElementsByTagName("body")[0].classList.add('light')
        document.getElementById("logoDark").classList.add('hiden')
        document.getElementById("logoLight").classList.remove('hiden')
    }
}

var lerMais = [false, false, false, false]
function overLerMais(id) {
    if (lerMais[id - 1] == false) {
        document.getElementById('lerMais' + id).style.marginLeft = '20px';
        lerMais[id - 1] = !lerMais[id - 1]
    } else {
        document.getElementById('lerMais' + id).style.marginLeft = '1 0px';
        lerMais[id - 1] = !lerMais[id - 1]
    }
}  