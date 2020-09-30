/*Meu
primeiro
programa
*/

//Meu primeiro programa
//Criadora: Keti

var mensagem = "Hello World!";
alert(mensagem);
alert("Olá mundo!");

var a = 2;
var b = 3;
var c = "Olá mundo!";

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

alert(soma);
alert(sub);
alert(mult);
alert(div);
alert(9%2);

if (b%2 == 1) {
	alert("Número ímpar");
}

if (a%2 == 1) {
	alert("Número ímpar");
}
else if (c%2 == 0) {
	alert("Número par");
}
else {
	alert("Valor inválido");
}

// while (enquanto)

var i = 0;

while (i < 3){
	alert(i);

	i = i+1;
}

// for (para)

var j;

for (var j = 0; j < 3; j++){
	alert(j);
}

var numero = 6;
var decimal = 4.5;
var texto = "Olá mundo";
var lista = ["laranja", "maçã", "banana", 1234];

alert(lista);
alert(lista[0]);
alert(lista[3]);

for (i in lista){
	alert (i);
	alert(lista[i]);
}

console.log("olá mundo");

function somaa(a, b){
	console.log(a+b);
}

somaa(2, 2);

function subtracao(a, b){
	return a-b;
}

var s = subtracao(5, 3);
console.log(s);

function multiplicacao(a, b){
	return a*b;
}

console.log(multiplicacao(5, 5));

function mensage(nome){
	alert("Ei não clique em mim "+nome);
}

function mensage2(nome){
	alert("Ei volte aqui "+nome);
}

function mudaCor(cor){
	var elemento = document.getElementById("mensagemm");
	elemento.style.color = cor;
}

function valida(){
	var nome = document.getElementById('nome')
	alert(nome.value);

	if (nome.value == ""){
		alert("Campo nome não pode estar em branco.")
	}
	else {
		alert("Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso.");
	}
}