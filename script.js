function Button(){
  document.getElementById("title").classList.toggle("animation")
}

var img_lightpink = document.getElementById("img_lightpink")
var img_lightgreen = document.getElementById("img_lightgreen")

function change_img(){
    img_lightpink.style.display = "block"
    img_lightgreen.style.display = "none"
}
function change_img_back(){
    img_lightpink.style.display = "none"
    img_lightgreen.style.display = "block"
}