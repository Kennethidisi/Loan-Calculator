
// listen form submit event

// document.querySelector('form').addEventListener('submit', function(event){
   
//     event.preventDefault() // prevent the form from automatic reloading the page

//     let principal = Number(document.querySelector('.principal').value)

//     let time = Number(document.querySelector('.time').value)

//    let rate = 25

//    let interest = (principal * time * rate) / 100

//    let amount = interest + principal

// //    converting to 2dp
//    amount = amount.toFixed(2);

// //    p
//    let result_display = document.querySelector('.result')

// //    span
//    let result = document.querySelector('.payable-amount');
   
   
 
//    result.innerHTML = amount
//    result_display.style.display = "flex"
     

// } )


// document.querySelector('form').addEventListener('submit', function(event){
//    event.preventDefault()
//    let principal = Number(document.querySelector('.principal').value)
//    let time = Number(document.querySelector('.time').value)
//    let rate = 25

//    let interest = (principal * rate * time) / 100
//    let amount = interest + principal
//    amount = amount.toFixed(2)

//    let result = document.querySelector('.payable-amount')
//    let result_display = document.querySelector('.result')

//    result.innerHTML = amount
//    result_display.style.display = "flex"

// })


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