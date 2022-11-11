
let name = document.querySelectorAll('.name')
let code =document.querySelectorAll('.code')
let type = document.querySelectorAll('.type')
let price=document.querySelectorAll('.price')
let image=document.querySelectorAll('.image-right')
var products=document.querySelectorAll('.product')



const getAPI = (index) => {
    fetch('https://berequirement.herokuapp.com/products', {method:"GET"})
        .then((response) => response.json())
        .then((data) => {
            
            name.forEach(element => {
                element.textContent=data.data[index].name;
            });
            code.forEach(element => {
                element.textContent=data.data[index].code;
            });
            type.forEach(element => {
                element.textContent=data.data[index].type;
            });
            price.forEach(element => {
                element.textContent=data.data[index].price;
            })
            image.forEach(element=>{
                element.innerHTML=`<img src=${data.data[index].image} />`

            })
})
}

getAPI(0)


for(let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", ()=>{
        products[i].classList.toggle('long')
        for(var j=0;j<products.length;j++){
            if (j!==i){
                if (products[j].classList.contains('long')){
                        products[j].classList.remove('long')
                }
            }
        }

        getAPI(i)
    })

}
let bag=document.querySelector('.ti-bag')
bag.addEventListener('click',()=>{
    var cart=document.querySelector('.cart')
    cart.classList.toggle("active")
})
let continueShoping=document.querySelector('#buy-btt')
continueShoping.addEventListener('click',()=>{
    var form=document.querySelector('#shipping')
    form.classList.toggle('active')
    var cart=document.querySelector('.cart')
    cart.classList.toggle("active")
})
let backToCard=document.querySelector('.back-btt')
backToCard.addEventListener('click',()=>{
    var form=document.querySelector('#shipping')
    form.classList.toggle('active')
})
let finish=document.querySelector('.finish-btt')
console.log(finish);
finish.addEventListener('click',()=>{
    var bodyWrapper=document.querySelector('.body-wrapper')
    bodyWrapper.classList.toggle('active')
    var form=document.querySelector('#shipping')
    form.classList.toggle('active')
})
let buyNow=document.querySelector('.buy-btt')
buyNow.addEventListener('click',()=>{
    var alert=document.querySelector('#noti')
    alert.classList.toggle('active')
    setTimeout(()=>
    {
        alert.classList.toggle('active')
    },3000)
    console.log(alert);
})
/* let minus=document.querySelector('.minus')
minus.addEventListener('click',()=>{
    let numberMinus=1
    numberMinus=numberMinus+1
    let number=document.querySelector('.number')
    number.textContent=numberMinus;

})
 */

const minusBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".add");
var number = document.querySelector(".number");
var totalPrice1 =document.querySelector('.totalPrice');
let priceAfter=document.querySelector('.price')
minusBtn.addEventListener("click", () => {
    if(number.innerText>0)
    {
        number.innerText --;
        totalPrice1.textContent=number.innerText*priceAfter.innerText;
    }
    
}
)
addBtn.addEventListener("click", () => {
    if(number.innerText===0)
    {
        totalPrice1.textContent='0'
    }
    else{
    number.innerText ++;
    totalPrice1.textContent=number.innerText*priceAfter.innerText;
    }
})
var totalPriceAfter=document.querySelector('.totalPrice')
let totalPriceProduct=document.querySelector('.totalPriceProduct')
    totalPriceProduct.textContent=totalPriceAfter.innerText+10;
