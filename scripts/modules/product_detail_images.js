let bigImage = document.getElementById("product-mainImage");
let smallImage1 = document.getElementById("min-image-1");
let smallImage2 = document.getElementById("min-image-2");
let smallImage3 = document.getElementById("min-image-3");
let imagesP = ["/assets/img/product-details/img-original-1.jpg", "/assets/img/product-details/img-original-2.jpg", "/assets/img/product-details/img-original-3.jpg"];

export function changeImagesDetails (){

        smallImage1.addEventListener("click", () => 
                bigImage.src = imagesP[0]
        
        );
        smallImage2.addEventListener("click", () => 
                bigImage.src = imagesP[1]
        
        );
        smallImage3.addEventListener("click", () => 
                bigImage.src = imagesP[2]
        
        );
}
