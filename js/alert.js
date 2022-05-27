// document.getElementById('adicionarcart').addEventListener('click', function () {
function alert() {
    Swal.fire({
        position: '',
        icon: 'success',
        title: '<p class="alert">Foi adicionado ao carrinho</p>',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        width: '250px',
        // padding: '15px 15px',
        // toast: 'true',
        background: '#fff',
        position: ''
    });
};
function breve() {
    Swal.fire({
        title: '<p class="breve">Sistema em manutenção</p>',
        text: 'Pedimos desculpas pelo inconveniente, mas o sistema esta em manutenção',
        showConfirmButton: true,
        // timer: 1200,
        // timerProgressBar: true,
        width: '400px',
        // padding: '15px 15px',
        // toast: 'true',
        background: '#fff',
        position: '',
        imageUrl: './images/manutencao.png',
        imageWidth: '70%'
    });
};

function esquecer() {
    Swal.fire({
        title: 'ESQUECEU SUA SENHA DE ACESSO?',
        input: 'email',
        text: 'Informe seu e-mail de cadastro',
        width: '450px',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'ENVIAR',
        showLoaderOnConfirm: false
    })
}