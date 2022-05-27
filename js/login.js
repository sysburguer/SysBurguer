function validate() {
    var mail = document.getElementById("email").value;
    var perfil = document.getElementById("perfil");
    var password = document.getElementById("senha").value;

    localStorage.setItem("email", mail)
    localStorage.setItem("senha", password)

    if (mail == "senai@senai.br" && password == "123456") {
        // alert("Início de sessão bem sucedido");
        Swal.fire({
            icon: 'success',
            title: '<p class="alert">Início de sessão bem sucedido</p>',
            showConfirmButton: false,
            toast: 'true',
            position: 'top-end',
            timer: 1500
        });

        document.getElementById("ativar").style.color = "#42AD55";
        // document.getElementById("ativar1").style.visibility = "visible";
        // document.getElementById("ativar2").style.display = "inline";
        document.querySelector('#emailperfil').innerHTML = localStorage.getItem('email');
        // window.location.href = "index.html";


    }
    else {
        // alert("Email ou senha incorretos");
        Swal.fire({
            icon: 'error',
            title: '<p class="alert">Email ou senha incorretos</p>',
            showConfirmButton: false,
            toast: 'true',
            position: 'top-end',
            timer: 1500
        })
        return false;

    }
};
hyperlink.onclick = function validate() {
    return false;
};
function Sair() {
    // localStorage.clear();
    localStorage.removeItem('email');
    localStorage.removeItem('senha');
    // window.location.href = "index.html";
    window.location.reload();

};
