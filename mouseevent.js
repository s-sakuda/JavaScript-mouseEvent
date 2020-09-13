'use-strict';

const mouseEvent = function () {
  let el = document.querySelector(".box");
  let cursor = document.querySelector(".mouse");

  window.addEventListener("mousemove", function (e) {
    let size = cursor.getBoundingClientRect().width;
    let X = e.clientX - (size / 2);
    let Y = e.clientY - (size / 2);
    cursor.style.transform = "translate(" + X + "px," + Y + "px)";
  });

  el.addEventListener("mouseenter", function () {
    cursor.classList.add("show");
  });
  el.addEventListener("mouseleave", function () {
    cursor.classList.remove("show");
  });
};


mouseEvent();
