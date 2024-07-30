let mTitle = document.getElementById('title');
let mDescription = document.getElementById('description');
let mReason = document.getElementById('reason');
let mWIL = document.getElementById('wil');
let mWILH3 = document.getElementById('wilH3');
let mSource = document.getElementById('source');
let mImage = document.getElementById('images');

let mExit = document.getElementById('modal-exit-btn');
let mBKG = document.getElementById('model-bkg');
let modal = document.getElementById('modal');
let show = document.getElementsByClassName("modal-show");
let click;

let info
fetch('../data/projects.json')
    .then(response => {return response.json();})
    .then(data => {
        info = data;
    })
    .catch(error => {console.error('There was a problem with the fetch operation:', error);});

for (let i=0; i < show.length; i++){
    show[i].addEventListener('click', function(e) {
        modal.style.display = "block";
        mBKG.style.display = "block";

        proj = info[show[i].id];
        mTitle.innerText = proj.title;
        mDescription.innerText = proj.description;
        mReason.innerText = proj.reason;
        if(proj.wil === "none"){
            mWIL.style.display = "none";
            mWILH3.style.display = "none";
        } else {
            mWIL.innerText = proj.wil;
            mWIL.style.display = "block";
            mWILH3.style.display = "block";
        }
        switch(proj.source.type){
            case "github":
                mSource.innerHTML = '<a href="' + proj.source.href + '" target="_blank">Link to github</a>';
                break;
            case "report":
                mSource.innerHTML = '<a href="' + proj.source.href + '" download>Download the report</a>';
                break;
        }
        mImage.innerHTML = '';
        for(let j=0; j<proj.images.count; j++){
            mImage.innerHTML += '<img src="' + proj.images.src[j] + '">';
            if(j < proj.images.count - 1){
                mImage.innerHTML += '<h4 style="text-align: center; margin-bottom: 25px;">' + proj.images.desc[j] + '</h4>';
            } else {
                mImage.innerHTML += '<h4 style="text-align: center;">' + proj.images.desc[j] + '</h4>';
            }
        }

        modal.scrollTop = 0;
    });
}

mBKG.addEventListener('click', function(e) {
    modal.style.display = "none";
    mBKG.style.display = "none";
});

mExit.addEventListener('click', function(e) {
    modal.style.display = "none";
    mBKG.style.display = "none";
});
