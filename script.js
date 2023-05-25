document.addEventListener('DOMContentLoaded', () => {
    const botaoNao = document.querySelector("#botao-negativo")

    botaoNao.addEventListener('click', ()=> {
        console.log('entrou')
        const x = Math.floor(Math.random() * (window.innerWidth - botaoNao.clientWidth))
        console.log(x)
        const y = Math.floor(Math.random() * (window.innerHeight - botaoNao.clientHeight))
        botaoNao.style.position = 'absolute'
        botaoNao.style.left = `${x}px`
        botaoNao.style.top = `${y}px`

    })

    const botaoSim = document.querySelector('#botao-positivo')

    botaoSim.addEventListener('click', () => {
       alert('uhullll agora estamos casados, te amoooooo')
    })
})