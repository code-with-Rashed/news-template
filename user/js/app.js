"use strict";

// toggle sidebar
const sidebar = document.querySelector("#sidebar");
function toggle() {
  sidebar.classList.toggle("expand");
  if (sidebar.classList.value) {
    document.querySelector(".main").style.width = "calc(100% - 260px)";
  } else {
    document.querySelector(".main").style.width = "calc(100% - 70px)";
  }
}

if (innerWidth > 1100) {
  toggle();
}