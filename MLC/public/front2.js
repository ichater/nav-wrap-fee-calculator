//tabbed content (different searches)
const tabs = document.querySelector(".tabs");
const pannels = document.querySelectorAll(".panel");

tabs.addEventListener("click", function(e) {
  if (e.target.tagName == "BUTTON") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    pannels.forEach(function(panel) {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});

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

const submitDetails = document.querySelector(".submitDetails");

submitDetails.addEventListener("click", function() {
  //personal details append
  const firstName = document.querySelector(".firstName").value;
  const surName = document.querySelector(".surName").value;
  const DOB = document.querySelector(".DOB").value;
  let firstName1 = document.querySelector(".firstName1");
  let surName1 = document.querySelector(".surName1");
  let DOB1 = document.querySelector(".DOB1");

  firstName1.textContent += firstName;
  surName1.textContent += surName;
  DOB1.textContent += DOB;
  //adviser details append
  const aName = document.querySelector(".aName").value;
  const aCode = document.querySelector(".aCode").value;
  const dGroup = document.querySelector(".dGroup").value;
  let aName1 = document.querySelector(".aName1");
  let aCode1 = document.querySelector(".aCode1");
  let dGroup1 = document.querySelector(".dGroup1");

  aName1.textContent += aName;
  aCode1.textContent += aCode;
  dGroup1.textContent += dGroup;

  //make details visible
  const persDeDisplay = document.querySelector(".persDeDisplay");
  const faDetDisplay = document.querySelector(".faDetDisplay");
  persDeDisplay.classList.remove("inactive");
  faDetDisplay.classList.remove("inactive");

  //Adviser fee details
  const initialFee = document.querySelector(".initialFee");
  const ongoingFee = document.querySelector(".ongoingFee");

  if (feeYes1.checked == true) {
    initialFee.classList.remove("inactive");
  }

  if (feeYes2.checked == true) {
    ongoingFee.classList.remove("inactive");
  }

  // change view to main
  const details = document.querySelector("#details");
  const main = document.querySelector("#main");
  details.classList.remove("active");
  main.classList.add("active");

  //make visible different account types
  let sel = document.querySelector(".accountType");
  let b = document.querySelectorAll(".superDetails");
  let c = document.querySelectorAll(".pensionDetails");
  let d = document.querySelectorAll(".investmentDetails");
  let e = document.querySelector(".legislationFee");
  function brevity(a1, b1, c1) {
    for (i = 0; i > 2; i++) {
      a1[i].classList.remove("inactive");
      b1[i].classList.add("inactive");
      c1[i].classList.add("inactive");
    }
  }
  a = sel.options[sel.selectedIndex].text;
  if (a == "Super") {
    brevity(b, c, d);
    e.classList.remove("inactive");
  }
  if (a == "Pension") {
    brevity(c, b, d);
    e.classList.remove("inactive");
  }
  if (a == "Investment") {
    brevity(d, b, c);
  }
});
