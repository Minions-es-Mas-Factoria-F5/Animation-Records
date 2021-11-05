import { addItem, updateCart } from "./modules/shopping-cart.js";
import { changeImage } from "./modules/slideshow.js";
import { obtainForm  } from "./modules/form.js";
import { like } from "./modules/thumbs-up.js";
import { changeImagesDetails } from "./modules/product_detail_images.js";

const addBtn = document.getElementById('add-button');
const imageSlide = document.getElementById('img-slideshow');
const likeBtn = document.getElementById('like-btn');
const formSubmitBtn = document.getElementById('submit');
const changeImagesBtn = document.getElementById ('product-images');


if ( addBtn != null ) {
    addBtn.onclick = addItem;
    likeBtn.onclick = like;
}

if (formSubmitBtn != null) {
    obtainForm();
}

if (changeImagesBtn != null) {
    changeImagesDetails();
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