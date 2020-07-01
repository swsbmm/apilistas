let action = document.getElementById('calcular')
    action.addEventListener('click', (e) => {
        e.preventDefault()
        let numero1 = document.getElementById('numero1')
        let numero2 = document.getElementById('numero2')
        let paresNumeros = {
            numero1 : numero1.value, 
            numero2 : numero2.value
        }
        let data = JSON.stringify(paresNumeros)
        
    })

// function peticion(data){

// }
