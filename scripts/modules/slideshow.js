let i=0;
let imagesSlider = ["/assets/img/banner/marvel-banner-opcion1.jpg", "/assets/img/banner/marvel-banner-opcion2.jpg", "/assets/img/banner/marvel-banner-opcion3.jpg"];
                                 
export function changeImage() {
    document.imgSlideshow.src = imagesSlider[i];

    if (i < imagesSlider.length - 1) {
        i++;
    } 
    else {
        i = 0;
    }
}
