var obj = document.getElementById("nav").getElementsByTagName("a");
for (var i = 0; i < obj.length; i++) {
    (function(obj, i) {
        obj.onmouseover = function() {
            obj.childNodes[1].style.top = "45%";
            obj.childNodes[3].style.top = "45%";
            // obj.parentNode.setAttribute("class","cur");
            // console.log(obj.parentNode);
        }
        obj.onmouseout = function() {
            obj.childNodes[3].style.top = "50%";
            obj.childNodes[1].style.top = "50%";
            // obj.parentNode.removeAttribute("class");
        }
    })(obj[i], i);
}
// console.log(obj);
var bannerDom = document.getElementById("banner");
// console.log(bannerDom);
var widths = [0 * -1920, 1 * -1920, 2 * -1920, 3 * -1920, 4 * -1920];
var i = 1;
if (bannerDom) {
    bannerDom.style.transition = 'all 1s';
}

setInterval(function() {
    var dots = document.getElementById("dots");

    // console.log(dots);
    if (dots) {
    	dots =dots.getElementsByTagName("li");
        dots[i].setAttribute("class", "cur");
        if (i > 0) {
            dots[i - 1].removeAttribute("class");
        }
        i++;
        if (i == widths.length) {
            i = 1;
            dots[4].removeAttribute("class");
            dots[i].setAttribute("class", "cur");
        }
        bannerDom.style.marginLeft = widths[i] + 'px';
    }
}, 3000);