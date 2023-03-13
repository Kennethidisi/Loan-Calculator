document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault()

    let principal = Number(document.querySelector('.principal').value)
    let time = Number(document.querySelector('.time').value)
    let rate = 25

    let interest = (principal*rate*time)/100
    let amount = principal + interest

    amount = amount.toFixed(2)

    let result_displayer = document.querySelector('.result-display')
    let result = document.querySelector('.result')

    result.innerHTML= '₦' + amount
    result_displayer.style.display = 'flex'
})