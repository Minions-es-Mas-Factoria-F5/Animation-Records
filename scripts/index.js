import { addItem, updateCart } from "./shopping-cart.js"

const addBtn = document.getElementById('add-button')
const imageSlide = document.getElementById('img-slideshow')

window.onload = updateCart

if ( addBtn != null ) {
    addBtn.onclick = addItem
}