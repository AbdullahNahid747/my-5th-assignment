let sum = 0;
let count = 1;
const isclicBtn = false;
const isTypeInput = false;
const button = document.getElementsByClassName('sit-btn')
for (const btn of button){
    btn.addEventListener('click', function(e){
        if( document.getElementById('sit-plus').innerText > 3){
            alert('Yous have already Four sit')
            return
        }
        e.target.style.backgroundColor = "#1DD100";
        const buttonValue = e.target.innerText;

        const decremenCount = parseInt(document.getElementById('sit-count-documents').innerText);
        const discount = decremenCount - count;
        document.getElementById('sit-count-documents').innerText = discount;

        const buccingSit = parseInt(document.getElementById('sit-plus').innerText);
        const incarement = buccingSit + count
        document.getElementById('sit-plus').innerText = incarement;

        const selectedItem = document.getElementById('four-list-html')
        const li = document.createElement('li')
        li.innerHTML = `${buttonValue} &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Economoy &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 550`
        selectedItem.appendChild(li)

        const TotalValue = parseInt(document.getElementById('total-price').innerText);
        const grandTotal = parseInt(document.getElementById('grand-total').innerText)
        const total = TotalValue + 550;
        document.getElementById('total-price').innerText = total
        discount.getElementById('grand-total').innerText = total

        sum++;
        if(sum ==4){
            const apply_cupone = discount.getElementById('apply-button');
            apply_cupone.removeAttribute('disabled')
        }

        button.setAttribute('disabled', true)
        nextSection()
    })
}