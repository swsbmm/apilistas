const Nodo = require('./nodo')

module.exports =class ListaDoble {
  constructor() {
    this.cab = null
  }

  insFinal(x) {
    let p = new Nodo(x)
    let q = this.cab
    let s = null
    while (q !== null) {
      s = q
      q = q.sig
    }
    if (s === null) {
      this.cab = p
    } else {
      s.sig = p
      p.ant = s
    }
  }

  imprimirAdelante() {
    let q = this.cab
    while (q !== null) {
      console.log(q.info, ' ')
      q = q.sig
    }
  }

  imprimeAtras() {
    let q = this.cab
    let s = null
    while (q !== null) {
      s = q
      q = q.sig
    }
    while (s !== null) {
      console.log(s.info, ' ')
      s = s.ant
    }
  }
}

