var wss_i = 0;
var wss_array = ["cute", "nice", "kind", "crap", "shit", "wank", "dips"];
var wss_elem;
function wssNext() {
wss_i++;
    wss_elem.style.opacity = 0;
    if (wss_i > (wss_array.length - 1)) {
        wss_i = 0;
    }
setTimeout('wssSlide()', 1000);
}

function wssSlide() {
wss_elem.innerHTML = wss_array[wss_i];
    wss_elem.style.opacity = 1;
setTimeout('wssNext()', 2000);
}

wss_elem = document.getElementById("wss");
wssSlide();
