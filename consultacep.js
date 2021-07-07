
function ajaxbruto(enderecourl){
	//Trata o retorno da API
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", enderecourl, false);
	xhttp.send();
	var resultadoajax = JSON.parse(xhttp.responseText);
	return resultadoajax;
};

window.onload = function(){
	//Pega o botão
	var btnbuscacep = document.getElementById('consultarcep');
	document.getElementById("resultado").classList.add("invisible");
	
	//Evento de click no botão e pegar o valor do input
	btnbuscacep.addEventListener("click", function(){
		var cep = document.getElementById("valorcep").value;
		var formu = document.getElementById("forms");

		if (cep != "" && cep.length == 8){
			var showform = document.getElementById("resultado");
			
			//consulta o cep com o valor inserido no input
			var url = "https://viacep.com.br/ws/"+cep+"/json/";
			cepresult = ajaxbruto(url);
			
			
			//Imprime o cep na tela
			//var cepprint = document.createElement("strong");
			var cepin = document.getElementById("cep").innerHTML = cepresult.cep;
			var estadoin = document.getElementById("estado").innerHTML = cepresult.uf;
			var cidadein = document.getElementById("cidade").innerHTML = cepresult.localidade;
			var logradouroin = document.getElementById("logradouro").innerHTML = cepresult.logradouro;

			//mostra resultado escondido
			showform.classList.remove("invisible");
			showform.classList.add("visible");
		}else {
			formu.classList.add("needs-validation", "was-validated");
		}
	});
};

