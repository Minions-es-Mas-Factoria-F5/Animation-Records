import { addItem, updateCart } from "./modules/shopping-cart.js";
import { changeImage } from "./modules/slideshow.js";
import { obtainForm  } from "./modules/form.js";
import { like } from "./modules/thumbs-up.js";

const addBtn = document.getElementById('add-button');
const imageSlide = document.getElementById('img-slideshow');
const likeBtn = document.getElementById('like-btn');
const formSubmitBtn = document.getElementById('submit');


if ( addBtn != null ) {
    addBtn.onclick = addItem;
    likeBtn.onclick = like;
}

if (formSubmitBtn != null) {
    obtainForm();
}

if ( imageSlide != null ) {
    window.onload = changeImage
    var timer = 3000
    setInterval(() => {
        changeImage()
    }, timer);
}

export function app(){
    updateCart();
}
app();