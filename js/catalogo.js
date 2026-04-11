let todasMusicas = [];

// carregar o JSON
fetch("/js/musicas.json")
.then(res => res.json())
.then(data => {

    data.sort((a, b) => 
    a.cantor.localeCompare(b.cantor, "pt-BR", { sensitivity: "base" })
    );

    todasMusicas = data;

    mostrarMusicas(data);

});

// função que mostra as músicas na tabela
function mostrarMusicas(lista){

    const tbody = document.getElementById("catalogo");

    tbody.innerHTML = "";

    lista.forEach(m => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
        <td>${m.codigo}</td>
        <td>${m.cantor}</td>
        <td>${m.musica}</td>
        `;

        tbody.appendChild(linha);

    });

}

// pesquisa
document
.getElementById("pesquisa")
.addEventListener("input", function(){

    const texto = this.value.toLowerCase();

    const filtradas = todasMusicas.filter(m =>

        m.musica.toLowerCase().includes(texto) ||
        m.cantor.toLowerCase().includes(texto)

    );

    mostrarMusicas(filtradas);

});
