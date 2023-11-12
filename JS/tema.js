// const data = new Date();
// let ano = data.getFullYear();
// document.getElementById("copy").innerHTML = `&copy; ` + ano;

const tema = {
    dark: {
        backgroundColor: "#193055"
    },
    light: {
        backgroundColor: "#ffffff"
    }
}


let temaInicial = 'dark'
function changeTema() {
    if (temaInicial == 'light') {
        document.getElementsByTagName("body")[0].style.backgroundColor = tema.dark.backgroundColor;
        temaInicial = 'dark'
    }
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor = tema.light.backgroundColor;
        temaInicial = 'light'
    }
} 