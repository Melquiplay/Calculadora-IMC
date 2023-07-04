function calcular(){
    peso = (document.getElementById("peso").value)
    altura = (document.getElementById("altura").value)
  
    altura = altura.replace(',', '.');

 
  if (isNaN(peso) || isNaN(altura)) {
    document.getElementById("resultado").innerHTML = "Please enter valid values for weight and height.";
    return;
  }
  
  var imc = peso / (altura * altura);
  imc = imc.toFixed(2); // Round BMI to 2 decimal places
  
  var category = "";
  
  if (imc < 18.5) {
    category = "<a style='color: blue'>Abaixo do peso!</a>";
    document.querySelector(".image").innerHTML = "<img src=image/fig1.png>"
    document.querySelector(".teste").style = "top: 80%; border: blue 10px solid"
  } else if (imc >= 18.5 && imc < 25) {
    category = "<a style='color: green'>No peso ideal</a>, parabéns.";
    document.querySelector(".image").innerHTML = "<img src=image/fig2.png>"
    document.querySelector(".teste").style = "top: 80%; border: green 10px solid"
  } else if (imc >= 25 && imc < 30) {
    category = "Acima do peso";
    document.querySelector(".image").innerHTML = "<img src=image/fig3.png>"
    document.querySelector(".teste").style = "top: 80%; border: pink 10px solid"
  } else if (imc >= 30 && imc < 35) {
    category = "Obeso";
    document.querySelector(".image").innerHTML = "<img src=image/fig4.png>"
    document.querySelector(".teste").style = "top: 80%; border: red 10px solid"
  } else {
    category = "Enquadrado(a) na cartegoria <a style='color: red'>Obeso Nivel II</a> ";
    document.querySelector(".image").innerHTML = "<img src=image/fig5.png>"
    document.querySelector(".teste").style = "top: 80%; border: red 10px solid"
  }
  
  var resultText = "Seu IMC é " + imc + " você está " + category;
  document.getElementById("resultado").innerHTML = resultText;
}


