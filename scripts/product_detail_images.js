let bigImage = document.getElementById("product-mainImage");
let smallImage1 = document.getElementById("min-image-1");
let smallImage2 = document.getElementById("min-image-2");
let smallImage3 = document.getElementById("min-image-3");
let images = ["./../assets/img/product-details/img-original-1.jpg", "./../assets/img/product-details/img-original-2.jpg", "./../assets/img/product-details/img-original-3.jpg"];
 
smallImage1.addEventListener("click", () => 
        bigImage.src = images[0]
);
smallImage2.addEventListener("click", () => 
        bigImage.src = images[1]
);
smallImage3.addEventListener("click", () => 
        bigImage.src = images[2]
);