document.addEventListener('DOMContentLoaded', () => {
    // Função para lidar com cliques nos botões de compra
    const comprarButtons = document.querySelectorAll('.comprar-btn');
    comprarButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Obrigado pela sua compra!');
        });
    });

    // Função para validar o formulário de contato
    const contatoForm = document.getElementById('contato-form');
    contatoForm.addEventListener('submit', (event) => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault();
        } else {
            alert('Mensagem enviada com sucesso!');
        }
    });
});
