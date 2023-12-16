let lastPage = 'Inicio'
function getPoint(id) {
    if (id.slice(1) != lastPage) {
        document.getElementById(id.slice(1) + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + id.slice(1)).classList.remove('hidden');

        document.getElementById(lastPage + 'Nav').style.color = '#ffffff'
        document.getElementById('dot' + lastPage).classList.add('hidden');

        lastPage = id.slice(1)
    }
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function setLastPage(nextPage) {
    console.log("goTo: " + localStorage.getItem("goTo"))
    document.getElementById("Servicos" + 'Nav').style.color = '#B8E4FE'
    document.getElementById('dot' + "Servicos").classList.remove('hidden');

    document.getElementById(lastPage + 'Nav').style.color = '#ffffff'
    document.getElementById('dot' + lastPage).classList.add('hidden');
    lastPage = nextPage;
}

function getPointSubPage(id) {
    console.log(id)
    localStorage.setItem("goTo", id);
    window.location.pathname = ""
}

function goToSubPage() {
    console.log("goTo: " + localStorage.getItem("goTo"))
    let id = localStorage.getItem("goTo")
    console.log(id)
    if (id != undefined || id != null || id != "") {
        document.getElementById(id.slice(1) + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + id.slice(1)).classList.remove('hidden');

        document.getElementById("Servicos" + 'Nav').style.color = '#ffffff'
        document.getElementById('dot' + "Servicos").classList.add('hidden');

        if (id != "#Inicio") {
            document.getElementById("Inicio" + 'Nav').style.color = '#ffffff'
            document.getElementById('dot' + "Inicio").classList.add('hidden');
        }


        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    localStorage.removeItem("goTo");
}

function search() {
    let string = document.getElementById("pesquisa").value
    window.find(string);
}

let aperance = false
function searchAperance(parent) {
    if (aperance) {
        if (document.getElementById("pesquisa").value == "") {
            document.getElementById("pesquisa").classList.add('hidden');
            document.getElementById("btnPesquisa").classList.remove('hidden');
            aperance = false
        }
    } else {
        if (parent != 0) {
            document.getElementById("btnPesquisa").classList.add('hidden');
            document.getElementById("pesquisa").classList.remove('hidden');
            aperance = true
        }
    }
}

function durationSlider() {
    var listItems = 1;
    var count = 0;

    setInterval(function () {
        searchAperance(0)
        count += 1;
        if (count >= listItems) {
            count = 0;
        }
    }, 4000);

}

durationSlider();

let clienteID = 1;

function cliente() {
    if (clienteID === 1) {
        document.getElementById("cliente" + (clienteID + 1)).className = "depoimentoCard col-8 showned"

        document.getElementById("cliente" + clienteID).className = "depoimentoCard col-8 hidden"
        clienteID = clienteID + 1;
    } else if (clienteID === 2) {
        document.getElementById("cliente" + (clienteID - 1)).className = "depoimentoCard col-8 showned"

        document.getElementById("cliente" + clienteID).className = "depoimentoCard col-8 hidden"
        clienteID = clienteID - 1;
    }
}

function orcamentoSubject() {
    document.getElementById("subject").value = "Pedido de orçamento para " + document.getElementById("Empresa").value
}