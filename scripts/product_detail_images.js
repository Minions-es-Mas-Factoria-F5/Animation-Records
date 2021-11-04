let bigImage = document.getElementById("product-mainImage");
let smallImage1 = document.getElementById("min-image-1");
let smallImage2 = document.getElementById("min-image-2");
let smallImage3 = document.getElementById("min-image-3");
/* 
smallImage1.addEventListener("click", () => 
        bigImage.src = images[0]
);
smallImage2.addEventListener("click", () => 
        bigImage.src = images[1]
);
smallImage3.addEventListener("click", () => 
        bigImage.src = images[2]
);
*/

let smallImg = Array.from(document.getElementsByClassName("min-img"));
const miniatures =["./../assets/img/product-details/img-miniature-1.png", "./../assets/img/product-details/img-miniature-2.png", "./../assets/img/product-details/img-miniature-3.png" ];
let images = ["./../assets/img/product-details/img-original-1.jpg", "./../assets/img/product-details/img-original-2.jpg", "./../assets/img/product-details/img-original-3.jpg"];

smallImg.addEventListener("click", () => {
    
    for (i=0; i=smallImg.lenght-1; i++) {
        bigImage.src = images[i] ;
} 
});

/*

smallImg.addEventListener("click", () => {
   
   smallImg.forEach (() => {
       if (element.src = miniatures[element]) {
        bigImage.src = images[element];
       }

   });
});   
     
   
    for (i=0; i=smallImg.lenght-1; i++) {
        if (i==0) {
        bigImage.src = images[0] ;
    } 
    if (i==1){
        bigImage.src = imagenes[1];

    }
    if (smallImg.src = miniatures[2]) {
        bigImage.src = miniatures[2];
    }
    }   */
  