import { addItem, updateCart } from "./shopping-cart.js"
import { changeImage } from "./slideshow.js"

const addBtn = document.getElementById('add-button')
const imageSlide = document.getElementById('img-slideshow')

window.onload = updateCart

if ( addBtn != null ) {
    addBtn.onclick = addItem
}

if ( imageSlide != null ) {
    window.onload = changeImage
    var timer = 3000
    setInterval(() => {
        changeImage()
    }, timer);
}