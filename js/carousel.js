let img = document.querySelectorAll('.pic > img');
let idx = 1;

function changeOpacity(){
    if (idx === img.length){
        idx = 0;
    }

    if (idx === 0){
        img[idx].style.opacity = "1";
        img[img.length - 1].style.opacity = "0";
    } else {
        img[idx].style.opacity = "1";
        img[idx - 1].style.opacity = "0";
    }

    idx++ ;
}

setInterval(changeOpacity, 7500)
