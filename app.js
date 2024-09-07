function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o texto digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("ipesquisareceita").value;

    // Verifica se o campo de pesquisa está vazio. Se sim, exibe uma mensagem de erro.
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome da receita ou algum adjetivo relacionado.</p>"
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Normaliza o texto da pesquisa para minúsculo
    const textopesquisa = campoPesquisa.toLowerCase();

    // Itera sobre cada dado da lista de dados e cria o HTML correspondente
    for (let dado of dados) {
        // Normaliza o título e descrição do dado para minúsculo para comparação
        const tituloNormalizado = dado.titulo.toLowerCase();
        const descricaoNormalizado = dado.descricao.toLowerCase();

        // Verifica se a palavra pesquisada existe no título ou descrição, ignorando maiúsculas e minúsculas
        if (tituloNormalizado.includes(textopesquisa) || dado.descricao.includes(campoPesquisa) || descricaoNormalizado.includes(textopesquisa)){
            // Cria um novo elemento HTML para cada resultado que corresponder à pesquisa
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.linkVideoYT} target="_blank" rel="noopener noreferrer">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.linkReceita} target="_blank" rel="noopener noreferrer">Clique aqui para ter acesso à receita</a>
                </div>
            `
        }
    }
    
    // Verifica se foram encontrados resultados. Se não, exibe uma mensagem de "Nada foi encontrado".
    if (resultados === "") {
        section.innerHTML = "<p>Nada foi encontrado.</p>";
    } else {
        // Atualiza o conteúdo da seção HTML com os resultados
        section.innerHTML = resultados;
    }
}





