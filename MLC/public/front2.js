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

// function accountVal() {
//   var x = document.querySelector(".accountType").selectedIndex;
//   var y = document.querySelector(".accountType").options;
//   alert(y[x].text);
// }

$(document).ready(function(){
    $(".accountType").change(function(){
        let selectedOption = $(".accountType option:selected").text();
    })
})

$(".accountType").change(function () {
    if ($(".accountType").value != "Super") {
      alert("Not Super")
    } 
  });

const submitDetails= document.querySelector(".personalDetails1");

submitDetails.addEventListener("click", function(){
    //personal details append
    const firstName = document.querySelector(".firstName").value;
    const surName = document.querySelector(".surName").value;
    const DOB = document.querySelector(".DOB").value;
    let firstName1 = document.querySelector(".firstName1");
    let surName1 = document.querySelector(".surName1");
    let DOB1 = document.querySelector(".DOB1");

    firstName1.textContent += firstName
    surName1.textContent += surName
    DOB1.textContent += DOB
    //adviser details append
    const aName = document.querySelector(".aName").value;
    const aCode = document.querySelector(".aCode").value;
    const dGroup = document.querySelector(".dGroup").value;
    let aName1 = document.querySelector(".aName1");
    let aCode1 = document.querySelector(".aCode1");
    let dGroup1 = document.querySelector(".dGroup1");

    aName1.textContent += aName
    aCode1.textContent += aCode
    dGroup1.textContent += dGroup
})
