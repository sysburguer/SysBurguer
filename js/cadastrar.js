function saveData() {
    let name, email, senha, csenha, cpf, telefone, cep, end, endnum, bairro;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    csenha = document.getElementById("csenha").value;
    cpf = document.getElementById("cpf").value;
    telefone = document.getElementById("telefone").value;
    cep = document.getElementById("cep").value;
    end = document.getElementById("end").value;
    endnum = document.getElementById("endnum").value;
    bairro = document.getElementById("bairro").value;


    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == email && v.cpf == cpf })) {
        alert("E-mail existente");
    }
    else {
        user_records.push({
            "name": name,
            "email": email,
            "senha": senha,
            "csenha": csenha,
            "cpf": cpf,
            "telefone": telefone,
            "cep": cep,
            "end": end,
            "endnum": endnum,
            "bairro": bairro
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }

}