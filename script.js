let images = ["./img/car/1.jpg", "./img/car/2.jpg", "./img/car/3.jpg", "./img/car/4.jpg"]
let index = 0;
let time = 3000;

let img_slider = document.getElementById('image-slider');

function slide_show() {
    img_slider.src=images[index];
    index++;

    if(index == images.length) { index = 0; }
    setTimeout('slide_show()', time);
}

slide_show();