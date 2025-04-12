import criarDom from "./dom.js";
import funcoes from "./function.js"

const testebutao = criarDom.criarButao('testar função', 'teste', );

document.body.appendChild(testebutao);

testebutao.addEventListener('click', () => {
    funcoes.dizerOla()
})