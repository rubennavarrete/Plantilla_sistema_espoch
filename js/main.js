const $button = document.querySelector("#sidebar-toggle");
const $wrapper = document.querySelector("#wrapper");
const $sidebar = document.querySelector("#container-sidebar");

$button.addEventListener("click", (e) => {
  e.preventDefault();
  $wrapper.classList.toggle("toggled");

  if ($wrapper.classList.contains("toggled")) {
    $sidebar.style.width = "50px";
    $sidebar.style.transition = "all 0.5s ease";
  } else {
    $sidebar.style.width = "250px";
  }
});

$(".status_change .dropdown-item").click(function () {
  var getStatusText = $(this).text();
  $(this).closest(".status_dropdown").find(".status__btn").text(getStatusText);
  var generateStatusClass = `${$(this).attr("data-class")}-status`;
  $(this)
    .closest(".status_dropdown")
    .attr("data-color", `${generateStatusClass}`);
});

var theToggle = document.getElementById("toggle");

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += " " + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  } else {
    elem.className += " " + className;
  }
}

theToggle.onclick = function () {
  toggleClass(this, "on");
  return false;
};
