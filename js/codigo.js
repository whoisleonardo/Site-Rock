function entrar() {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    alert(`E-mail: ${email}\nSenha: ${senha}`);
    
    console.log(`E-mail: ${email}, Senha: ${senha}`);

    document.getElementById('sub').innerText = `E-mail: ${email}, Senha: ${senha}`;

    event.preventDefault();
}

function verificar() {
    const numero = parseInt(prompt('Digite um número inteiro:'));
    const parOuImpar = (numero % 2 === 0) ? 'par' : 'ímpar';
    const divisivelPor3 = (numero % 3 === 0) ? 'divisível por 3' : 'não é divisível por 3';
    alert(`O número ${numero} é ${parOuImpar} e ${divisivelPor3}.`);
}    