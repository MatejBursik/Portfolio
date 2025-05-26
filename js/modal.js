let mExit = document.getElementById('modal-exit-btn');
let mBKG = document.getElementById('model-bkg');
let modal = document.getElementsByClassName("modal"); // all modals
let modal_show = document.getElementsByClassName("modal-show"); // all boxes to show modals
let click;

let info;

for (let i=0; i < modal_show.length; i++){
    modal_show[i].addEventListener('click', function(e) {
        console.log(modal_show[i].id)
        let targetModal = Array.from(modal)
                       .find(m => m.id === modal_show[i].id + "_modal");

        if (targetModal) {
            targetModal.style.display = "block";
            mBKG.style.display = "block";

            modal.scrollTop = 0;
        }
    });
}

mBKG.addEventListener('click', function(e) {
    for (let i=0; i < modal.length; i++){
        modal[i].style.display = "none";
    }
    mBKG.style.display = "none";
});

mExit.addEventListener('click', function(e) {
    for (let i=0; i < modal.length; i++){
        modal[i].style.display = "none";
    }
    mBKG.style.display = "none";
});
