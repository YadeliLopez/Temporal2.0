var BotonValidar = document.getElementById("enviar");

BotonValidar.addEventListener("click", function () {
    var params = new URLSearchParams();
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    params.append("usu", usuario);
    params.append("pass", password);
    console.log("{" + "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'}");
    var params3 =  "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'";
    axios.post("http://localhost:4567/holaJson", { "usu": params.get("usu"), pass: params.get("pass") } )
        .then(function (rs) {
            console.log(rs.data);
        })
        .catch(function (error) {
            console.log(error);
        });

        if(params.get("usu") == "yayis"){
            if(params.get("pass") == "cata29"){
                console.log("Bienvenido");
                window.location.replace('usuarios.html');
            }
        }else{
            window.location.replace('registro.html');
             
        }
});