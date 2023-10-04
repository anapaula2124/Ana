document.addEventListener('DOMContentLoaded', function () {
    const senha = document.getElementById('senha');
    const confirmSenha = document.getElementById('confirm_senha');
    const senhaAlert = document.getElementById('senha-alert');

    confirmSenha.addEventListener('blur', function () {
        if (senha.value !== confirmSenha.value) {
            senhaAlert.innerText = 'As senhas não coincidem.';
        } else {
            senhaAlert.innerText = '';
        }
    });
function validarSenha() {
        const senhaValue = senha.value;

        const temMinuscula = /[a-z]/.test(senhaValue);
        const temMaiuscula = /[A-Z]/.test(senhaValue);
        const temCaractereEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-=]/.test(senhaValue);

        if (senhaValue.length >= 6 && temMinuscula && temMaiuscula && temCaractereEspecial) {
            senhaAlert.innerText = ''; 
            return true; 
        } else {
            senhaAlert.innerText = 'A senha deve ter pelo menos 6 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial.';
            return false; 
        }
    }

    document.getElementById('seu-formulario').addEventListener('submit', function (event) {
        if (!validarSenha()) {
            event.preventDefault(); 
        }
    });
});







