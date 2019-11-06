//Home page adviser details show/not show (NO MORE JQUERY!)

const feeNo1 = document.querySelector(".feeNo1");
const feeYes1 = document.querySelector(".feeYes1");
const feeNo2 = document.querySelector(".feeNo2");
const feeYes2 = document.querySelector(".feeYes2");
const panel2 = document.querySelector(".panel2");
const panel1 = document.querySelector(".panel1");

feeNo1.addEventListener("click", function() {
  if ((feeNo1.checked = true)) {
    panel2.classList.remove("active");
  }
});

feeYes1.addEventListener("click", function() {
  if ((feeYes1.checked = true)) {
    panel2.classList.add("active");
  }
});

feeNo2.addEventListener("click", function() {
  if ((feeNo2.checked = true)) {
    panel1.classList.remove("active");
  }
});

feeYes2.addEventListener("click", function() {
  if ((feeYes2.checked = true)) {
    panel1.classList.add("active");
  }
});

//Account type selector

function accountVal() {
  var x = document.querySelector(".accountType").selectedIndex;
  var y = document.querySelector(".accountType").options;
  alert(y[x].text);
}
