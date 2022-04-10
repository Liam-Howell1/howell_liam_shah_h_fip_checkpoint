document.addEventListener("DOMContentLoaded", function(event) {
    var allPersonImages = document.getElementsByClassName('personIMG');
    for (var i = 0; i < allPersonImages.length; i++) {
        allPersonImages[i].onmouseover = function() {
            this.style.filter = "drop-shadow(16px 16px 20px grey) invert(10%)";
        };
        allPersonImages[i].onmouseout = function() {
            this.style.filter = "none";
        };
    }
});