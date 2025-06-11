const si = document.getElementById("scrollIndicator")
const target = document.getElementById("welcome");

si.addEventListener("click", function (e) {
    e.preventDefault();

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    console.log(target)
});
