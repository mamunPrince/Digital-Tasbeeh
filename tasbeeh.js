// all buttons at once
const buttons = document.querySelectorAll('.btn');
// Display counter (h3)
const counterDisplay = document.querySelector('h3');
// show tasbeeh
const tasbeeh = document.querySelector('p');
// counting
let count = 0;
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        if(button.classList.contains('increase')){
            count ++;
            counterDisplay.innerText = count;
        }
        if(count < 33){
            tasbeeh.classList.add('show');
            tasbeeh.innerText = "SubhanAllah"
        }
        if(count >=34 ){
            tasbeeh.classList.add('show');
            tasbeeh.innerText = "Al-hamdu-lillah"
        }
        if(count >=67 ){
            tasbeeh.classList.add('show');
            tasbeeh.innerText = "Allahu Akbar"
        }
        if(count >=100 ){
            tasbeeh.classList.add('show');
            tasbeeh.innerText = "La ilaha illal lahu wah dahu la sharika lahu lahul mulku wa lahul hamdu wa hua ala kulli shaieen kadir"
        }
        if(count >=101 ){
            alert('Press RESET');
        }
        
        if(button.classList.contains('reset')){
            count = 0;
            counterDisplay.innerText = count;
            tasbeeh.classList.remove('show');
        }
    })
})