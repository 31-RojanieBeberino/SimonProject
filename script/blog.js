



// I'll separate this script because the font colors and container are different in dark mode.


document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const body = document.body;
    const paragraphs = document.querySelectorAll("p");
    const h2 = document.querySelectorAll("h2");
    const h3 = document.querySelectorAll("h3");
    const h5 = document.querySelectorAll("h5");
    const h6 = document.querySelectorAll("h6");
    const category = document.querySelectorAll("select");
    const divContainer = document.querySelectorAll(".div-container");
    const firstfooter = document.querySelectorAll("#ffooter");
    const footerA = document.querySelectorAll(".footer-a");
    const footerIMG = document.querySelectorAll(".IMG");
    const secondfooter = document.querySelectorAll("#sfooter");
    const button = document.querySelectorAll(".btn-text");
    const btn = document.querySelectorAll(".btn-outline-dark");
    const cardRow = document.querySelectorAll("#card-row");
    const iconSec = document.querySelectorAll(".div-container i");
    const iconSecInr = document.querySelectorAll(".innerIcon i");


    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.style.backgroundColor = "#151623";
            body.style.color = "#fff";

            h2.forEach(h => h.style.color = "#fff");

            h3.forEach(h => h.style.color = "#fff");

            h5.forEach(h => h.style.color = "#fff");

            h6.forEach(h => h.style.color = "#fff");

            iconSecInr.forEach(irrow => irrow.style.color = "#fff!important");

            category.forEach(select => {
                select.style.backgroundColor = "#151623";
                select.style.color = "#fff";
            });
            
            paragraphs.forEach(p => p.style.color = "#fff");

           

            cardRow.forEach(div => {
                div.style.backgroundColor = "#fff";
                div.style.color = "#000";
            
            });

            iconSec.forEach(i => {
                i.style.color = "#fff";
            });
            

            button.forEach(button => {
                button.style.color = "#fff";
            });

            btn.forEach(btn => {
                btn.style.border = "1px solid #fff";
            });

            footerA.forEach(div => {
                div.style.color = "#fff";
            
            });

            footerIMG.forEach(div => {
                div.style.filter = "invert(1)";
            
            });

            
            firstfooter.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff";
            
            });

            secondfooter.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff";
            
            });
            divContainer.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff!important";
            });

        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black!important";

            h2.forEach(h => h.style.color = "#000");

            h3.forEach(h => h.style.color = "#000");

            h5.forEach(h => h.style.color = "#000");

            h6.forEach(h => h.style.color = "#000");

            iconSecInr.forEach(irrow => irrow.style.color = "#000");
            
            paragraphs.forEach(p => p.style.color = "black");

            category.forEach(select => {
                select.style.backgroundColor = "#fff";
                select.style.color = "#000";
            });

            button.forEach(button => {
                button.style.color = "#000";
            });

            btn.forEach(btn => {
                btn.style.border = "1px solid #000";
            });

            iconSec.forEach(i => {
                i.style.color = "#000";
            });
            

            divContainer.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "black";
            });

            cardRow.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "#000";
            
            });

            firstfooter.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "#fff";
            
            });

            footerA.forEach(div => {
                div.style.color = "#000";
            
            });

            footerIMG.forEach(div => {
                div.style.filter = "invert(0)";
            
            });

            secondfooter.forEach(div => {
                div.style.backgroundColor = "#000";
                div.style.color = "#fff";
            
            });
            
        }
    });
});



// for sticky navbar

document.addEventListener("DOMContentLoaded", () => {
    const Stickytoggle = document.getElementById("stickytoggle");
    const body = document.body;
    const paragraphs = document.querySelectorAll("p");
    const h2 = document.querySelectorAll("h2");
    const h3 = document.querySelectorAll("h3");
    const h5 = document.querySelectorAll("h5");
    const h6 = document.querySelectorAll("h6");
    const category = document.querySelectorAll("select");
    const firstfooter = document.querySelectorAll("#ffooter");
    const footerA = document.querySelectorAll(".footer-a");
    const footerIMG = document.querySelectorAll(".IMG");
    const secondfooter = document.querySelectorAll("#sfooter");
    const button = document.querySelectorAll(".btn-text");
    const btn = document.querySelectorAll(".btn-outline-dark");
    const cardRow = document.querySelectorAll("#card-row");


    Stickytoggle.addEventListener("change", () => {
        if (Stickytoggle.checked) {
            body.style.backgroundColor = "#151623";
            body.style.color = "#fff";

            h2.forEach(h => h.style.color = "#000");

            h3.forEach(h => h.style.color = "#000");

            h5.forEach(h => h.style.color = "#000");

            h6.forEach(h => h.style.color = "#000");

            category.forEach(select => {
                select.style.backgroundColor = "#151623";
                select.style.color = "#fff";
            });
            
            paragraphs.forEach(p => p.style.color = "#fff");

           

            cardRow.forEach(div => {
                div.style.backgroundColor = "#fff";
                div.style.color = "#000";
            
            });
            

            button.forEach(button => {
                button.style.color = "#fff";
            });

            btn.forEach(btn => {
                btn.style.border = "1px solid #fff";
            });

            footerA.forEach(div => {
                div.style.color = "#fff";
            
            });

            footerIMG.forEach(div => {
                div.style.filter = "invert(1)";
            
            });

            
            firstfooter.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff";
            
            });

            secondfooter.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff";
            
            });

        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";

            h2.forEach(h => h.style.color = "#000");

            h3.forEach(h => h.style.color = "#000");

            h5.forEach(h => h.style.color = "#000");

            h6.forEach(h => h.style.color = "#000");
            
            paragraphs.forEach(p => p.style.color = "black");

            category.forEach(select => {
                select.style.backgroundColor = "#fff";
                select.style.color = "#000";
            });

            button.forEach(button => {
                button.style.color = "#000";
            });

            btn.forEach(btn => {
                btn.style.border = "1px solid #000";
            });
            

            divContainer.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "black";
            });

            cardRow.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "#000";
            
            });

            firstfooter.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "#fff";
            
            });

            footerA.forEach(div => {
                div.style.color = "#000";
            
            });

            footerIMG.forEach(div => {
                div.style.filter = "invert(0)";
            
            });

            secondfooter.forEach(div => {
                div.style.backgroundColor = "#000";
                div.style.color = "#fff";
            
            });
            
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("#sticky");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 80) {
            header.classList.add("show");
        } else {
            header.classList.remove("show");
        }
    });
});


