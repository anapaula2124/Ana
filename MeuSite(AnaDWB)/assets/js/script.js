async function validateCadastro() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    try {
        const response = await axios.post('https://seu-backend.com/cadastro', { 
            nome: nome,
            cpf: cpf,
            email: email,
            telefone: telefone,
            endereco: endereco,
            senha: senha,
            confirmarSenha: confirmarSenha
        });

        if (response.data.cadastroBemSucedido) {
            document.getElementById('cadastroSuccessMessage').style.display = 'block';
            document.getElementById('voltarParaLogin').style.display = 'block';
            
            setTimeout(function() {
                window.location.href = "login.html";
            }, 2000); 
        } else {
            alert('O cadastro falhou. Verifique seus dados e tente novamente.');
        }
    } catch (error) {
        console.error(error);
    }

    return false;
}
