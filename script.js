const botao = document.getElementById("comparar");

botao.addEventListener("click", comparar);

function comparar() {

    const veiculo1 = document.getElementById("veiculo1").value;
    const velocidade1 = Number(document.getElementById("velocidade1").value);

    const veiculo2 = document.getElementById("veiculo2").value;
    const velocidade2 = Number(document.getElementById("velocidade2").value);

    const resultado = document.getElementById("resultado");

    if (
        veiculo1 === "" ||
        veiculo2 === "" ||
        isNaN(velocidade1) ||
        isNaN(velocidade2)
    ) {

        resultado.innerHTML = "⚠️ Preencha todos os campos.";

        return;

    }

    if (velocidade1 > velocidade2) {

        resultado.innerHTML = `🏆 ${veiculo1} é mais rápido que ${veiculo2}.`;

    }

    else if (velocidade2 > velocidade1) {

        resultado.innerHTML = `🏆 ${veiculo2} é mais rápido que ${veiculo1}.`;

    }

    else{

        resultado.innerHTML = "🤝 Os dois veículos possuem a mesma velocidade.";

    }

}