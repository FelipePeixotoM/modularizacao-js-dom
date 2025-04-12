function criarElemento(elemento) {
    return document.createElement(elemento);
}

const criarDom = {
    criarButao: (text, id) => {
        const butaoGenerico = criarElemento('button');
        butaoGenerico.textContent = text
        butaoGenerico.id = id
        return butaoGenerico
    }
}

export default criarDom