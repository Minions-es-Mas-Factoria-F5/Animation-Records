let i=0;
let images = ["./../assets/img/banner/marvel-banner-opcion1.jpg", "./../assets/img/banner/marvel-banner-opcion2.jpg", "./../assets/img/banner/marvel-banner-opcion3.jpg"];


export function changeImage() {
    document.imgSlideshow.src = images[i];

    if (i < images.length - 1) {
        i++;
    } 
    else {
        i = 0;
    }
}

// let i=0;
// let images = ["./../assets/img/banner/marvel-banner-opcion1.jpg", "./../assets/img/banner/marvel-banner-opcion2.jpg", "./../assets/img/banner/marvel-banner-opcion3.jpg"];
// let timer = 3000;


// export function changeImage() {
//     document.imgSlideshow.src = images[i];

//     if (i < images.length - 1) {
//         i++;
//     } 
//     else {
//         i = 0;
//     }

//     setTimeout("changeImage()", timer);
// }
