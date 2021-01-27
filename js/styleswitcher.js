const links = document.querySelectorAll(".alternate-style");

totallinks = links.length;


function setActiveStyle(color) {
    for (let i = 0; i < totallinks; i++) {
        if (color == links[i].getAttribute("name")) {
            links[i].removeAttribute("disabled");
            //console.log(links[i].getAttribute("name") + "is enabled");
        } else {
            //console.log(links[i].getAttribute("name") + "is disabled");
            links[i].setAttribute("disabled", "true");
        }
    }

}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});