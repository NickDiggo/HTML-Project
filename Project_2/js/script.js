const menuIcon = document.querySelector("#menu-icon");
const LinksHeader = document.querySelector(".links-header");

menuIcon.onclick = () => {
  LinksHeader.classList.toggle("active");
};
