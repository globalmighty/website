let tema = 'dark'
function changeTema() {
    if (tema == 'light') {
        tema = 'dark'
        document.getElementsByTagName("body")[0].classList.remove('light')
        document.getElementsByTagName("body")[0].classList.add('dark')
    }
    else {
        tema = 'light'
        document.getElementsByTagName("body")[0].classList.remove('dark')
        document.getElementsByTagName("body")[0].classList.add('light')
    }
} 