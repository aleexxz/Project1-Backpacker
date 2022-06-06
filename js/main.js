// LOADER
const loadGif = document.getElementById("loader");
// NAV TOGGLE ON SCROLL BAR & GO TO TOP ONCLICK
const logoScroll = document.getElementById("logoScroll");
// INNER HTML NAVIGATION
const header = document.getElementsByTagName("header")[0];
// HTML SECTION PAGES
const packSectionStyle = document.getElementById("packSection");
const aboutPage = document.getElementById("aboutSection");
const contactPage = document.getElementById("contactSection");
const main = document.getElementById("main");
// POPUP NEWSLETTER SUBMIT
const popUpSubs = document.getElementById("popUpSubscription");
// POPUP CONTACT SUBMIT
const popContact = document.getElementById("popContact");
// CREATE ACC PAGE
const createAcc = document.getElementById("createAcc");
// CREATE ACC LOGIN SECTION
const loginSection = document.getElementById("loginSection");
// CREATE ACC SIGN UP SECTION
const signUpSection = document.getElementById("signUpSection");
// COUNTER ANIMATION
const colSection = document.getElementsByClassName("bg-wrapper")[0];
const colNum = document.querySelectorAll(".col-number");
// HIDE / SHOW
const hideComp = document.getElementsByClassName("hide");
const showComp = document.getElementsByClassName("show");

// BUTTONS
// HTML SECTION BTNS
const packSectionBtn = document.getElementsByClassName("goToPack");
const aboutBtn = document.getElementsByClassName("goToAbout");
const contactBtn = document.getElementsByClassName("goToContact");
// POPUP SUBSCRIPTION BTNS
const subscribeBtn = document.getElementById("subscribeBtn");
const contactSendBtn = document.getElementById("contactSendBtn");
const popUpCloseBtn = document.getElementById("popUpCloseBtn");
// POPUP CONTACT BTNS
const popUpCloseBtnContact = document.getElementById("popUpCloseBtnContact");
// CREATE ACC BTNS
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const joinNow = document.getElementsByClassName("join-now");
const closeJoinNow = document.getElementById("closeJoinNow");
// BUTTONS END

// ON WINDOW LOAD
window.addEventListener("load", () => {
    contactPage.classList.add("disabled");
    aboutPage.classList.add("disabled");
    createAcc.classList.add("hidden");
    // popUpSubs.classList.add("hidden-sub");
    loadGif.style.display = "none";
});

// FUNCTIONS

// SCROLL
function scrollLogo() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        logoScroll.style.display = "block";
    } else {
        logoScroll.style.display = "none";
    }
}
// GO TO TOP
function goTop() {
    logoScroll.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

// GO TO PACK SECTION
function goToPackSection() {
    for (i = 0; i < packSectionBtn.length; i++) {
        packSectionBtn[i].addEventListener("click", () => {
            main.classList.remove("disabled")
            contactPage.classList.add("disabled");
            aboutPage.classList.add("disabled");
            createAcc.classList.add("hidden");
            for (i = 0; i < showComp.length; i++) {
                showComp[i].classList.remove("disabled");
            }
            header.style.height = "100vh";
        });
    }
}

// GO TO ABOUT SECTION
function goToAbout() {
    for (i = 0; i < aboutBtn.length; i++) {
        aboutBtn[i].addEventListener("click", () => {
            aboutPage.classList.remove("disabled");
            aboutPage.classList.add("activeW");
            contactPage.classList.add("disabled");
            main.classList.add("disabled");
            createAcc.classList.add("hidden");
            // hide elements
            for (i = 0; i < hideComp.length; i++) {
                hideComp[i].classList.add("disabled");
            }
            // prevent overflow
            header.style.height = "fit-content";
        });
    }
}

// GO TO CONTACT SECTION
function goToContact() {
    for (i = 0; i < contactBtn.length; i++) {
        contactBtn[i].addEventListener("click", () => {
            contactPage.classList.remove("disabled");
            contactPage.classList.add("activeW");
            aboutPage.classList.add("disabled");
            main.classList.add("disabled");
            createAcc.classList.add("hidden");
            // hide elements
            for (i = 0; i < hideComp.length; i++) {
                hideComp[i].classList.add("disabled");
            }
            // prevent overflow
            header.style.height = "fit-content";
        });
    }
}

// JOIN BACKBACKER COMMUNITY FORM
function joinFrom() {
    for (i = 0; i < joinNow.length; i++) {
        joinNow[i].addEventListener("click", () => {
            createAcc.classList.remove("hidden");
            signUpSection.classList.add("disabled");
            // loginSection.classList.add("disabled");
            // JOIN NOW ANIMATION
            $("#createAcc").animate({
                top: "0"
            }, "slow");
        });
    }
    // SIGN UP BTN
    signUpBtn.addEventListener("click", () => {
        signUpSection.classList.remove("disabled");
        signUpSection.classList.add("activeW");
        loginSection.classList.add("disabled");
    });
    // LOGIN BTN
    loginBtn.addEventListener("click", () => {
        loginSection.classList.remove("disabled");
        loginSection.classList.add("activeW");
        signUpSection.classList.add("disabled");
    });
    // CLOSE JOIN FORM
    closeJoinNow.addEventListener("click", () => {
        $("#createAcc").animate({
            top: "-1100px"
        }, "slow");
    });
}

// SHOW MORE PHOTOS BTN
const showPhotos = document.getElementsByClassName("show-photos");
for (i = 0; i < showPhotos.length; i++) {
    showPhotos[i].classList.add("disabled");
}
// CREATING BUTTON
const commSection = document.getElementsByClassName("community-photos")[0];
const createShowPhoto = document.createElement("i");
commSection.appendChild(createShowPhoto);
createShowPhoto.setAttribute("class", "fa-solid fa-plus show-more-photos");
const showPhotoBtn = document.getElementsByClassName("fa-solid fa-plus")[0];

function showMorePhotos() {
    showPhotoBtn.addEventListener("click", () => {
        for (i = 0; i < showPhotos.length; i++) {
            showPhotos[i].style.display = "block";
        }
        showPhotoBtn.classList.add("hidden");
    });
}
// SUBSCRIPTION PUPUP
function subMsgPopUp() {
    let blur = document.getElementsByClassName("blur");
    subscribeBtn.addEventListener("click", () => {
        let email = document.getElementById("newsletter-email-input");
        if (email.value === "" || !email.value.includes("\@")) {
            return false;
        } else {
            // popUpSubs.classList.remove("hidden-sub");
            popUpSubs.classList.add("active-popUp");
            for (i = 0; i < blur.length; i++) {
                blur[i].classList.add("blur-active")
            }
            email.value = "";
        }
    });
    // CLOSE BTN TOGGLE BLUR OFF
    popUpCloseBtn.addEventListener("click", () => {
        // popUpSubs.classList.add("hidden-sub");
        popUpSubs.classList.remove("active-popUp");
        for (i = 0; i < blur.length; i++) {
            blur[i].classList.remove("blur-active");
            blur[i].style.transition = "0.5s ease-in-out"
        }
    });
}
// POPUP CONTACT FORM 
function contactForm() {
    let blur = document.getElementsByClassName("blur");
    let ctForm = document.getElementById("contactForm");
    contactSendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let formInputs = document.getElementsByClassName("box");
        for (i = 0; i < formInputs.length; i++) {
            if (formInputs[i].value === true || formInputs[i].value.length > 0) {
                popContact.classList.add("active-popUp");
                for (i = 0; i < blur.length; i++) {
                    blur[i].classList.add("blur-active");
                }
                ctForm.reset();
                formInputs[0].focus();
            } else {
                return false;
            }
        }

    });

    popUpCloseBtnContact.addEventListener("click", () => {
        popContact.classList.remove("active-popUp");
        for (i = 0; i < blur.length; i++) {
            blur[i].classList.remove("blur-active");
            blur[i].style.transition = "0.5s ease-in-out"
        }
    });
}

// SIGN UP FORM AND LOGIN FORM
// SIGN UP FORM
const signUp = e => {
        let fName = document.getElementById("fName").value;
        let lName = document.getElementById("lName").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;

        let formData = JSON.parse(localStorage.getItem("formData")) || [];

        let exist = formData.length &&
            JSON.parse(localStorage.getItem("formData")).some(data =>
                data.email.toLowerCase() == email.toLowerCase()
            );

        if (!exist) {
            formData.push({
                fName,
                lName,
                email,
                pass
            });
            localStorage.setItem("formData", JSON.stringify(formData));
            document.getElementById("signUpForm").reset();
            alert("Account created.\n");
        } else {
            alert("Email already registered\n\nYou have already signed up");
        }
        e.preventDefault();
    }
    // LOGIN FORM
function signIn(e) {
    let email = document.getElementById("loginEmail").value
    let pass = document.getElementById("loginPass").value;
    let formData = JSON.parse(localStorage.getItem("formData")) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem("formData")).some(data => data.email.toLowerCase() == email && data.pass.toLowerCase() == pass);
    if (!exist) {
        alert("Incorrect email/password");
    } else {
        location.href = "/";
    }
    e.preventDefault();
}
// END OF SIGN UP AND SIGN IN FORM

// CALL FUNCTIONS
window.onscroll = function() {
    scrollLogo();
}
goTop();
goToPackSection();
goToAbout();
goToContact();
joinFrom();
showMorePhotos();
subMsgPopUp();
contactForm();


// COUNTER ANIMATION
let counterScroll = new IntersectionObserver((entries, obs) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    // console.log(entry)
    const speed = 100;
    colNum.forEach((col) => {
        function counter() {
            const target = +col.dataset.target;
            const count = +col.textContent;
            const increment = target / speed;

            if (count < target) {
                col.textContent = Math.ceil(count + increment);
                setTimeout(counter, 40);
            } else {
                col.textContent = target;
            }
        }
        counter();
    });
    obs.unobserve(colSection);
}, {
    root: null,
    threshold: 0.4
});
counterScroll.observe(colSection);
// END OF COUNTER ANIMATION

// SEARCH

$("#searchBtn1, #searchBtn2").click(function() {
    $(".search-results").animate({
        left: "0"
    }, "slow");
});
$("#closeSearch").click(function() {
    $(".search-results").animate({
        left: "100%"
    }, "slow");
});

const posts = [{
        id: "#post1",
        img: "images/card-images/img1-card.jpg",
        name: "Backpacks: An Owner's Manual",
        description: "Understanding suspension and construction is key to finding the right fit—and proper maintenance and repair will ensure your load-hauler lasts thousands of miles.",
        user: "John Wick",
        time: "Last updated 3 mins ago"
    },
    // {
    //     img: "images/card-images/img2-card.jpg",
    //     name: "The Hiker's Guide to Staying Hydrated and Treating Dehydration",
    //     description: "A hydrated hiker is a happy hiker. Feel good and crush miles with these tips for identifying and avoiding dehydration.",
    //     user: "Jane Doe",
    //     time: "Last updated 2 hours ago"
    // },
    {
        id: "#post3",
        img: "images/card-images/img3-card.jpg",
        name: "How To Make Hiking Fun When Hiking Sucks",
        description: "Bad weather, horrendous blisters, endless hills—it's all fun if you look at it the right way.",
        user: "Sarah Stewart",
        time: "Last updated 1 days ago"
    },
    // {
    //     img: "images/card-images/img4-card.jpg",
    //     name: "8 tips for better campfire cooking",
    //     description: "Primal meets gourmet with campfire cooking. Learn the key techniques for success with this Trail Chef primer on campfire cooking basics.",
    //     user: "Trail Chief Mike Pastrama",
    //     time: "Last updated 2 days ago"
    // },
    {
        id: "#post5",
        img: "images/card-images/img5-card.jpg",
        name: "how to face your fear of backpacking alone",
        description: "A solo hiking or backpacking trip can either be a freeing or terrifying experience. Learn how to prepare and tame your imagination in the backcountry.",
        user: "Adam Roy",
        time: "Last updated 3 days ago"
    },
    // {
    //     img: "images/card-images/img6-card.jpg",
    //     name: "8 Tips for Leading a Group Hiking Trip",
    //     description: "If you play your cards right, you can turn your non-hiker friends into lifelong backpacking partners.",
    //     user: "George Cole",
    //     time: "Last updated 3 days ago"
    // }
];
// console.log(posts);

function selectCard(selector) {
    return document.querySelector(selector);
}
const searchResult = document.querySelector(".search-results");

function getResults() {
    var search = document.getElementById("searchBar").value;
    searchResult.style.display = "block";

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            posts[i].description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            posts[i].user.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            selectCard(".search-results").innerHTML +=
                `<div class="show-posts">
                <div class="col">
                <button type="button" class="modal-btn-style" data-bs-toggle="modal" data-bs-target="${posts[i].id}">
                    <div class="card h-100">
                        <img src="${posts[i].img}"
                        class="card-img-top"
                        alt="image"/>
                        <div class="card-body">
                            <h5 class="card-title text-capitalize fw-bold text-start">${posts[i].name}</h5>
                            <p class="card-text text-start">${posts[i].description}
                            </p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <small class="text-muted">
                            ${posts[i].user}</small>
                            <small class="text-muted">${posts[i].time}</small>
                        </div>
                    </div>
                </button>
            </div>
            </div>`;
        }
        $("#searchBar").click(function() {
            $(".show-posts").empty();
        });
    }
    $("#closeSearch").click(function() {
        $(".search-results").animate({
            left: "100%"
        }, "slow");
    });
}