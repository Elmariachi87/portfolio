// Swiper JS - Testimonials

const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");
const body = document.body;
const x = window.matchMedia("(max-width: 600px)");

if (x.matches) {
  // Show menu
  const showMenu = function () {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  };

  // Hide menu
  const hideMenu = function () {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  };
  menuBtn.addEventListener("click", function () {
    showMenu();
  });

  closeBtn.addEventListener("click", () => {
    hideMenu();
  });

  // Closes menu if you click anywhere but the nav or menu btn (navBarGroup)
  body.addEventListener("click", (e) => {
    //   e.preventDefault;
    console.log(e.target);
    //   This checks that where you've clicked is NOT on the navBarGroup
    if (e.target.id !== "navBarGroup") {
      hideMenu();
    }
  });
}

const navItems = menu.querySelectorAll("li");

const changeActiveItem = () =>
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItem();
    link.classList.add("active");
  });
});

const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  readMoreContent.classList.toggle("show-content");
  if (readMoreBtn.innerText === "Show more") {
    readMoreBtn.innerText = "Show less";
  } else {
    readMoreBtn.innerText = "Show more";
    window.location.href = "#about";
    // window.scrollTo(window.about);
  }
});

// Skills section - show / hide

const skillItems = document.querySelectorAll("section.skills .skill");
console.log(skillItems);

skillItems.forEach((skill) => {
  skill.querySelector(".head").addEventListener("click", () => {
    skill.querySelector(".items").classList.toggle(".items.show-items");
  });
});

console.log();
