const addBtn = document.getElementById('add-button')
const shopNum = document.getElementById('cart-num')
const shopCircle = document.getElementById('shop-circle')

function updateCart()
{
    var buyNum = localStorage.getItem('itemNum')
    shopNum.innerHTML = buyNum
    if ( buyNum == null ) {
        shopCircle.style.display = "none"
    }
}

window.onload = updateCart()

addBtn.onclick = function() 
{
    shopCircle.style.display = "flex"
    var buyList = localStorage.getItem('buyList')
    var totalItems = localStorage.getItem('itemNum')
    var itmTitle = document.getElementById('product-title').innerHTML
    if ( buyList != null ) {
        localStorage.setItem('buyList', localStorage.getItem("buyList") + " # " + itmTitle)
    }
    if ( buyList == null ) {
        localStorage.setItem('buyList', itmTitle)
    }
    if ( totalItems != null) {
        localStorage.itemNum = Number(localStorage.itemNum) + 1
    }
    if ( totalItems == null) {
        localStorage.setItem('itemNum', 1)
    }    
    updateCart()
}