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
    if (nextPage == "Orcamentos") {
        document.getElementById("Orcamento" + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + "Orcamento").classList.remove('hidden');
    } else if (nextPage == "Contacto") {
        document.getElementById("Contacto" + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + "Contacto").classList.remove('hidden');
    } else {
        document.getElementById("Servicos" + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + "Servicos").classList.remove('hidden');
    }

    document.getElementById(lastPage + 'Nav').style.color = '#ffffff'
    document.getElementById('dot' + lastPage).classList.add('hidden');
    lastPage = nextPage;
}

function getPointSubPage(id) {
    localStorage.setItem("goTo", id);
    window.location.pathname = ""
}

function goToSubPage() {
    let id = localStorage.getItem("goTo")

    if (id != undefined || id != null || id != "") {
        document.getElementById("Servicos" + 'Nav').style.color = '#ffffff'
        document.getElementById('dot' + "Servicos").classList.add('hidden');

        document.getElementById(id.slice(1) + 'Nav').style.color = '#B8E4FE'
        document.getElementById('dot' + id.slice(1)).classList.remove('hidden');
        
        if (id != "#Inicio") {
            document.getElementById("Inicio" + 'Nav').style.color = '#ffffff'
            document.getElementById('dot' + "Inicio").classList.add('hidden');
        }


        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    lastPage = id.slice(1);

    localStorage.removeItem("goTo");
}

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