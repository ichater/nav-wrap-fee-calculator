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

  const fTable = document.querySelector(".fTable")
  fTable.classList.remove("inactive");

  //personal details append
  const firstName = document.querySelector(".firstName").value;
  const surName = document.querySelector(".surName").value;
  const DOB = document.querySelector(".DOB").value;
  let firstName1 = document.querySelector(".firstName1");
  let surName1 = document.querySelector(".surName1");
  let DOB1 = document.querySelector(".DOB1");

  firstName1.textContent = firstName;
  surName1.textContent = surName;
  DOB1.textContent = DOB;
  //adviser details append
  const aName = document.querySelector(".aName").value;
  const aCode = document.querySelector(".aCode").value;
  const dGroup = document.querySelector(".dGroup").value;
  let aName1 = document.querySelector(".aName1");
  let aCode1 = document.querySelector(".aCode1");
  let dGroup1 = document.querySelector(".dGroup1");

  aName1.textContent = aName;
  aCode1.textContent = aCode;
  dGroup1.textContent = dGroup;

  //make details visible
  const persDeDisplay = document.querySelector(".persDeDisplay");
  const faDetDisplay = document.querySelector(".faDetDisplay");
  persDeDisplay.classList.remove("inactive");
  faDetDisplay.classList.remove("inactive");

  //Adviser fee details
  //initial fees
  const initialFee = document.querySelector(".initialFee");
  const idollarFee = document.querySelector(".idollarFee");
  let idollarFee1 = document.querySelector(".idollarFee1 span");
  const idollarFeeVal = document.querySelector(".idollarFeeVal");
  const feePerc1 = document.querySelector(".feePerc1") 
  let ipercFee1 = document.querySelector(".ipercFee1 span")
  const percfeeVal = document.querySelector(".percfeeVal")
  const AND = document.querySelector(".AND")
 


  if (feeYes1.checked == true) {
    initialFee.classList.remove("inactive");
  } else{
    initialFee.classList.add("inactive");
  }
    
  if(idollarFee.checked == true){
    idollarFee1.textContent = idollarFeeVal.value
    idollarFee1.parentNode.classList.remove("inactive")
  }

  if(feePerc1.checked == true){
    ipercFee1.textContent = percfeeVal.value
    ipercFee1.parentNode.classList.remove("inactive")
  }

  if(feePerc1.checked == true && idollarFee.checked == true ){   
    AND.classList.remove("inactive");
  }

 


  
  //ongoing fees  
  const ongoingFee = document.querySelector(".ongoingFee");
  const odollarFeeVal = document.querySelector(".odollarFeeVal");
  const odollarFee = document.querySelector(".odollarFee"); 
  let odollarFee2 = document.querySelector(".odollarFee2 span");
  let yearlyI = document.querySelector(".yearlyI span");
  const persIncrease1 = document.querySelector(".persIncrease1");
  const persIncrease = document.querySelector(".persIncrease"); 
  const CPI = document.querySelector(".CPI"); 
  const feePerc2 = document.querySelector(".feePerc2")
  let ipercFee2 = document.querySelector(".ipercFee2 span");
  const feePerc2Val = document.querySelector(".feePerc2Val")
  const AND1 = document.querySelector(".AND1")


  if (feeYes2.checked == true) {
    ongoingFee.classList.remove("inactive");
  } else{
    ongoingFee.classList.add("inactive");
  }

  if(odollarFee.checked == true){
    odollarFee2.textContent = odollarFeeVal.value
    odollarFee2.parentNode.classList.remove("inactive");
  } else {
    odollarFee2.classList.add("inactive");
  }

  if(persIncrease.checked == true){
    yearlyI.textContent = persIncrease1.value + "% increase PA"
    yearlyI.parentNode.classList.remove("inactive")
  } 
  if(CPI.checked == true){
    yearlyI.textContent = "increased by CPI per year"
    yearlyI.parentNode.classList.remove("inactive")
  } 

  if(feePerc2.checked == true){
    ipercFee2.textContent = feePerc2Val.value
    ipercFee2.parentNode.classList.remove("inactive")
  } 
  if(feePerc2.checked == true && odollarFee.checked == true ){   
    AND1.classList.remove("inactive");
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
      for(let i=0; i < a1.length; i++){
        a1[i].classList.remove("inactive");
        b1[i].classList.add("inactive");
        c1[i].classList.add("inactive");
  }}

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
    e.classList.add("inactive");
  };
//Pension details below
let age = document.querySelector('.age')
    var Q4A = "";
    var Bdate = document.querySelector('.DOB').value;
    var Bday = +new Date(Bdate);
    Q4A = ~~ ((Date.now() - Bday) / (31557600000));
    // var theBday = document.getElementById('resultBday');
    // theBday.innerHTML = 
    age.textContent = Q4A;
    if(a == "Pension" && Q4A < 60){
        alert("Too young! inelligable for pension come back in "
        + (60 - Q4A) + " years!")
    }
    if(a == "Pension"){
        alert("Please populate Regular Pension Facility details before account value and investment options")
    }
});


