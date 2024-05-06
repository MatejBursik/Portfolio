let mBKG = document.getElementById('model-bkg');
let modal = document.getElementById('modal');
let mTitle = document.getElementById('title');
let mDescription = document.getElementById('description');
let mReason = document.getElementById('reason');
let mWIL = document.getElementById('wil');
let mSource = document.getElementById('source');
let mImage = document.getElementById('images');

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
        mWIL.innerText = proj.wil;
        switch(proj.source.type){
            case "github":
                mSource.innerHTML = '<a href="' + proj.source.href + '">Link to github</a>';
                break;
            case "report":
                mSource.innerHTML = '<a href="' + proj.source.href + '" download>Download the report</a>';
                break;
        }
        mImage.innerHTML = '';
        proj.images.forEach(link => {
            mImage.innerHTML += '<img src="' + link + '">';
        });
    });
}

mBKG.addEventListener('click', function(e) {
    modal.style.display = "none";
    mBKG.style.display = "none";
});
