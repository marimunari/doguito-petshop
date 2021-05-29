import { clienteService } from '../service/cliente-service.js';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    try {
        const nome = evento.target.querySelector('[data-nome]').value;
        const email = evento.target.querySelector('[data-email]').value;

        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html';
    } catch(erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html';
    }
});