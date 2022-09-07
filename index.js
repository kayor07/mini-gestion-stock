/* let p=document.querySelector(".id")
window.setInterval(function(){
    p.classList.toggle('red')
},1000)      */
let stock =[]
let product ={
    productName:"",
    productMarketPrice:0,
    productSellingPrice:0,
    productStockQuantity:0,
}
let divregister =document.querySelector(".register")
let divform =document.querySelector(".form")
let divproductlist =document.querySelector(".productlist")
let buttonregister =document.querySelector(".register_btn")
let registerformElt =document.querySelector(".register_form")
let buttonsubmitform =document.querySelector(".formsubmit")
let productnameInput=document.getElementById('productname')
let marketpriceInput=document.getElementById('marketprice')
let sellingpriceInput=document.getElementById('sellingprice')
let stockquantityInput=document.getElementById('stockquantity')
let buttonregisterClosed=document.createElement("button")
buttonregisterClosed.classList.add("register_btn")
buttonregisterClosed.textContent="close"

/* registerformElt.hidden=false */

buttonregister.addEventListener("click", (e)=>{
registerformElt.hidden = !registerformElt.hidden
buttonregister.parentNode.appendChild(buttonregisterClosed)
buttonregister.parentNode.removeChild(buttonregister)

})
buttonregisterClosed.addEventListener("click", (e)=>{
    registerformElt.hidden = !registerformElt.hidden
    buttonregisterClosed.parentNode.appendChild(buttonregister)
    buttonregisterClosed.textContent="Add product"
    buttonregisterClosed.parentNode.removeChild(buttonregisterClosed)
    
    
    })
/* buttonsubmitform.addEventListener("click", (e)=> {}) */

/* productnameInput.addEventListener("blur", (e)=>{
    product.productName=e.target.value
})
marketpriceInput.addEventListener("blur", (e)=>{
    product.productMarketPrice= Number(e.target.value) 
})
sellingpriceInput.addEventListener("blur", (e)=>{
    product.productSellingPrice=Number(e.target.value)
})
stockquantityInput.addEventListener("blur", (e)=>{
    product.productStockQuantity=Number(e.target.value)
}) */

registerformElt.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    registerformElt.hidden=true

    stock.push(
        {
            productName:productnameInput.value,
            productMarketPrice: Number(marketpriceInput.value) ,
            productSellingPrice: Number(sellingpriceInput.value),
            productStockQuantity:Number(stockquantityInput.value) ,
        }
    )
    productnameInput.value =""
    marketpriceInput.value =""
    sellingpriceInput.value=""
    stockquantityInput.value=""
    console.log(stock)
    document.querySelector(".Productlist").innerHTML=""
    for(let product of stock){
        let mytr=document.createElement('tr')
        let productNameTd=document.createElement('td')
        let productMarketPriceTd=document.createElement('td')
        let productSellingPriceTd=document.createElement('td')
        let productQuantityTd=document.createElement('td')
        let updateButton=document.createElement('button')
        let deleteButton=document.createElement('button')
        updateButton.textContent="Modifier"
        deleteButton.textContent="Supprimer"
        productNameTd.textContent=product.productName
        productMarketPriceTd.textContent=product.productMarketPrice
        productSellingPriceTd.textContent=product.productSellingPrice
        productQuantityTd.textContent=product.productStockQuantity
        mytr.appendChild(productNameTd)
        mytr.appendChild(productMarketPriceTd)
        mytr.appendChild(productSellingPriceTd)
        mytr.appendChild(productQuantityTd)
        mytr.appendChild(updateButton)
        mytr.appendChild(deleteButton)
        document.querySelector(".Productlist").appendChild(mytr)
        updateButton.classList.add("btn__update")
        deleteButton.classList.add("btn__delete")


        deleteButton.addEventListener("click",(e)=>{
            document.querySelector(".Productlist").removeChild(mytr)
        })
        updateButton.addEventListener("click",(e)=>{
            
        })
    }
    
})






















