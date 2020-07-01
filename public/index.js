var http = new XMLHttpRequest()
var url = 'http://localhost:8080/'
var numero1 = document.getElementById('numero1')
var numero2 = document.getElementById('numero2')
http.open('POST', url, true)
http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    //aqui obtienes la respuesta de tu peticion
    alert(http.responseText)
  }
}

let action = document.getElementById('calcular')
action.addEventListener('click', (e) => {
  let numero1 = document.getElementById('numero1')
  let numero2 = document.getElementById('numero2')
  let paresNumeros = {
    numero1: numero1.value,
    numero2: numero2.value,
  }

  let data = JSON.stringify(paresNumeros)
  http.send(data)
})
