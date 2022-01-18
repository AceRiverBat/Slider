var slide = new Array("jcp.jpg", "wow.jpg", "waow.jpg", "cbo.jpg");
var i = 0;

function ChangeSlide(sens) {
    i = i + sens;
    if (i < 0)
        i = slide.length - 1;
    if (i > slide.length - 1)
        i = 0;
    document.getElementById("slide").src = slide[i];
}
setInterval("ChangeSlide(1)", 4500);