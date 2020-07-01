const lista = require('./ListaDoble')

module.exports = function () {
  let listaNumeroUno = new lista()
  let listaNumeroDos = new lista()

  // sumarDosNumero(a,b){
  // }

  listaNumeroUno.insFinal(1)
  listaNumeroUno.insFinal(2)
  listaNumeroUno.insFinal(4)
  listaNumeroUno.insFinal(6)

  listaNumeroUno.imprimirAdelante()

  listaNumeroUno.imprimeAtras()
}
