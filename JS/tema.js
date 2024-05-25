let tema = 'dark'
function changeTema() {
    if (tema == 'light') {
        tema = 'dark'
        document.getElementsByTagName("body")[0].classList.remove('light')
        document.getElementsByTagName("body")[0].classList.add('dark')
        document.getElementById("logoLight").classList.add('hidden')
        document.getElementById("logoDark").classList.remove('hidden')
        document.getElementById("logoLightFooter").classList.add('hidden')
        document.getElementById("logoDarkFooter").classList.remove('hidden')
    }
    else {
        tema = 'light'
        document.getElementsByTagName("body")[0].classList.remove('dark')
        document.getElementsByTagName("body")[0].classList.add('light')
        document.getElementById("logoDark").classList.add('hidden')
        document.getElementById("logoLight").classList.remove('hidden')
        document.getElementById("logoDarkFooter").classList.add('hidden')
        document.getElementById("logoLightFooter").classList.remove('hidden')
    }
    localStorage.setItem("tema", tema);
}

function onLoadTema(temaAnterior) {
    if (tema == temaAnterior) {
        console.log(temaAnterior);
    } else {
        changeTema()
    }
}

var lerMais = [false, false, false, false]
function overLerMais(id) {
    if (lerMais[id - 1] == false) {
        document.getElementById('lerMais' + id).style.marginLeft = '20px';
        lerMais[id - 1] = !lerMais[id - 1]
    } else {
        document.getElementById('lerMais' + id).style.marginLeft = '10px';
        lerMais[id - 1] = !lerMais[id - 1]
    }
}