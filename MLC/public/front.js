function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

// make Table elements invisible if investments not selected.

function activeTable() {
  const ASXTable = document.querySelector("#ASXTable1");
  const listed = document.querySelector(".listed");

  const fundTable = document.querySelector("#fundTable");
  const funded = document.querySelector(".funded");

  const SMATable = document.querySelector("#SMATable");
  const seperateManage = document.querySelector(".seperateManage");

  const activeClassToggle = (fundPage, fundInfo) => {
    fundPage.children.length > 1
      ? fundInfo.classList.remove("inactive")
      : fundInfo.classList.add("inactive");
  };

  activeClassToggle(ASXTable, listed);
  activeClassToggle(fundTable, funded);
  activeClassToggle(SMATable, seperateManage);
}

function cashAccount() {
  a = 0;
  b = $("#c2").val() / 100;
  $(".val2").each(function () {
    a += parseFloat($(this).text());
  });
  $(".cashBalance cashNum").text(roundToTwo(b - a));
}
//If a MF or SMA is not Nab Owned then fee it at .1%
function nabOwned() {
  let b = 0;
  $(".NBO").each(function () {
    if (!$(this).text().includes("#")) {
      $(this).siblings(".val1").children(".val2").addClass("Nfee");
    }
  });
  $(".Nfee").each(function () {
    b += parseFloat($(this).text());
  });
  $(".nabOT span").text(roundToTwo(b / 1000));
}

//Mer totals
function MERTotal() {
  let total2 = 0;
  $(".MER1").each(function () {
    total2 += parseFloat($(this).text());
  });
  $(".MERtotal span").text(roundToTwo(total2));
}

function investmentValueperc() {
  a = 0;
  b = parseFloat($(".totalBalance").text()) - a;
  $(".perc input[type=number]").each(function () {
    if ($(this).val() != "") {
      a += parseFloat($(this).val());
    }
  });
  if (a > 99) {
    alert("over 99% investment value.");
  }
}

function investMER() {
  $(".perc1 input[type=number]").each(function () {
    let a = parseFloat(
      $(this).parent().siblings(".val1").children(".val2").text()
    );
    let b = parseFloat(
      $(this).parent().siblings(".MER").children(".MER2").text()
    );
    let answer = (a / 100) * b;
    $(this)
      .parent()
      .siblings(".MER")
      .children(".MER1")
      .text(roundToTwo(answer));
  });
}

//display total balance pretty
function displayPretty() {
  let dollars = $("#c2").val() / 100;
  $(".totalBalance span").text(dollars);
}

//Add in % and populate $ value
function investmentValueDollar() {
  let toDoText = $("#c2").val() / 100;
  $(".perc input[type=number]").each(function () {
    let answer = roundToTwo(toDoText / 100) * $(this).val();
    $(this).parent().siblings(".val1").children(".val2").text(answer);
  });
}
//Listed Investment value
function shareFee() {
  let a = 0;
  $(".si input[type=number]").each(function () {
    $(this)
      .parent()
      .siblings(".val1")
      .children(".val2")
      .each(function () {
        a += parseFloat($(this).text());
        $(".listedFee span").text(roundToTwo((a / 100) * 0.15));
      });
  });
}

//display fees in table
function feeTotal() {
  let amount = $("#c2").val() / 100;
  let a = amount * 0.004;
  let b = (amount - 200000) * 0.0015;
  let c = (amount - 500000) * 0.0003;
  if (a > 0 && a < 375) {
    $(".t1 span").text(375);
  } else if (a > 375 && a < 800) {
    $(".t1 span").text(roundToTwo(a));
  } else {
    $(".t1 span").text(800);
  }
  if (amount > 200000 && amount < 500000) {
    $(".t2 span").text(roundToTwo(b));
  } else if (amount > 500000) {
    $(".t2 span").text(450);
  } else {
    $(".t2 span").text("0");
  }
  if (c > 0 && c < 1149.99) {
    $(".t3 span").text(roundToTwo(c));
  } else if (c > 1150) {
    $(".t3 span").text(1150);
  } else {
    $(".t3 span").text(0);
  }
}

// total fee.
function totalFee() {
  let a = 0;
  $(".totals-table span").each(function () {
    a += parseFloat($(this).text());
  });
  if (a > 2400) {
    $(".total span").text(2400);
  } else {
    $(".total span").text(a);
  }
}
//super admin fee
function superFee() {
  a = $("#c2").val() / 100;
  b = (a / 100) * 0.025;
  if (b < 600) {
    $(".legislationFee .legislationFee1").text(roundToTwo(b));
  } else {
    $(".legislationFee .legislationFee1").text(600);
  }
}
//pension min and max
function minMaxPension() {
  a = $("#c2").val() / 100;
  b = $(".age").text();
  $(".pensionMax").text(a);
  //minimum pension calc

  if (b < 65) {
    $(".pensionMin").text(roundToTwo((a / 100) * 4));
    $(".pensionMinPerc").text(4);
  }
  if (b >= 65 && b <= 74) {
    $(".pensionMin").text(roundToTwo((a / 100) * 5));
    $(".pensionMinPerc").text(5);
  }
  if (b >= 65 && b <= 79) {
    $(".pensionMin").text(roundToTwo((a / 100) * 6));
    $(".pensionMinPerc").text(6);
  }
  if (b >= 80 && b <= 84) {
    $(".pensionMin").text(roundToTwo((a / 100) * 7));
    $(".pensionMinPerc").text(7);
  }
  if (b >= 85 && b <= 89) {
    $(".pensionMin").text(roundToTwo((a / 100) * 9));
    $(".pensionMinPerc").text(9);
  }
  if (b >= 90 && b <= 94) {
    $(".pensionMin").text(roundToTwo((a / 100) * 11));
    $(".pensionMinPerc").text(11);
  }
  if (b >= 95) {
    $(".pensionMin").text(roundToTwo((a / 100) * 14));
    $(".pensionMinPerc").text(14);
  }
}

let pensionAmount = document.querySelector(".pensionAmount");
let pensionFrequency = document.querySelector(".pensionFrequency");
let pensionMin = document.querySelector(".pensionMin");
let pensionMax = document.querySelector(".pensionMax");
let paymentAmount = document.querySelector(".paymentAmount span");
let pNominated1 = document.querySelector(".pNominated1");
let nominatedInput = document.querySelector(".nominatedInput");
let cashBalancePension = document.querySelector(".cashBalancePension span");

function perPaymentAmount() {
  a = pensionAmount.options[pensionAmount.selectedIndex].text;
  b = pensionFrequency.options[pensionFrequency.selectedIndex].text;
  c = "";
  d = "";
  //payment amount dropdown choice
  if (a == "minimum") {
    c = pensionMin.textContent;
    pNominated1.classList.add("inactive");
  }
  if (a == "nominated") {
    pNominated1.classList.remove("inactive");
    c = $(".nominatedInput").val();
  }
  if (a == "maximum") {
    c = pensionMax.textContent;
    // alert(c)
    pNominated1.classList.add("inactive");
  }
  //payment frequency dropdown choice
  if (b == "monthly") {
    d = 12;
  }
  if (b == "Quarterly") {
    d = 4;
  }
  if (b == "Half-yearly") {
    d = 2;
  }
  if (b == "Yearly") {
    d = 1;
  }

  paymentAmount.textContent = roundToTwo(c / d);

  // error when nominating more than min/max
  e = parseFloat(pensionMax.textContent);
  f = parseFloat(pensionMin.textContent);
  let warningP = document.querySelector(".warningP");
  let nominatedInput = document.querySelector(".nominatedInput");
  if (nominatedInput.value > e || nominatedInput.value < f) {
    nominatedInput.setAttribute("style", "background:red; height: 1.2em");
    warningP.classList.remove("inactive");
  }
  if (nominatedInput.value > f && nominatedInput.value < e) {
    nominatedInput.setAttribute("style", "background:none; height: 1.2em");
    warningP.classList.add("inactive");
  }
}
function cashAccountPension() {
  a = 0;
  b = pensionFrequency.options[pensionFrequency.selectedIndex].text;
  b1 = pensionAmount.options[pensionAmount.selectedIndex].text;
  be = $("#c2").val() / 100;
  pensionCashMin = 0;
  $(".val2").each(function () {
    a += parseFloat($(this).text());
  });

  if (b == "monthly") {
    pensionCashMin = parseFloat(paymentAmount.textContent) * 2;
  } else {
    pensionCashMin = parseFloat(paymentAmount.textContent);
  }
  //per pension amount plus minimum of 1%
  a1 = pensionCashMin + be / 100;
  $(".cashBalancePension1").text(roundToTwo(be - a));

  //Cash account error handling

  //Min never higher than account balance
  if (a1 > be - a && b == "Yearly" && b1 == "maximum") {
    $(".cashBalancePensionMin").text(be - a);
  } else {
    $(".cashBalancePensionMin").text(a1);
  }
  //cash account lower than minimum error
  if (be - a < a1) {
    alert(
      "Cash account is below the minimum required, Either adjust pension payments " +
        "or change investment allocation."
    );
  }
}

$(".pensionFrequency").on("click", function () {
  a = pensionAmount.options[pensionAmount.selectedIndex].text;
  if (a == nominated) {
    alert("Please populate account value before pension amount");
  }
});

$(document).on("keyup", ".nominatedInput", function () {
  minMaxPension();
  perPaymentAmount();
  cashAccountPension();
});

$(document).on("change", ".pensionAmount", function () {
  minMaxPension();
  perPaymentAmount();
  cashAccountPension();
});

$(document).on("change", ".pensionFrequency", function () {
  minMaxPension();
  perPaymentAmount();
  cashAccountPension();
});

$(document).on("click", ".submitDetails", function () {
  minMaxPension();
});

$(document).on("keyup", "#c2", function () {
  displayPretty();
  investmentValueperc();
  investmentValueDollar();
  cashAccount();
  shareFee();
  nabOwned();
  investMER();
  MERTotal();
  feeTotal();
  totalFee();
  activeTable();
  superFee();
  minMaxPension();
  perPaymentAmount();
  cashAccountPension();
});
// cash account total
$(document).on("keyup", ".perc input[type=number]", function () {
  investmentValueperc();
  investmentValueDollar();
  cashAccount();
  shareFee();
  nabOwned();
  investMER();
  MERTotal();
  feeTotal();
  totalFee();
  activeTable();
  cashAccountPension();
});
// Delete
$(document).on("click", ".del", function () {
  $(this)
    .parent()
    .siblings()
    .fadeOut(500, function () {
      $(this).remove();
    });
  $(this)
    .parent()
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
      investmentValueperc();
      investmentValueDollar();
      cashAccount();
      shareFee();
      nabOwned();
      investMER();
      MERTotal();
      feeTotal();
      totalFee();
      activeTable();
      cashAccountPension();
    });

  event.stopPropagation();
});

//Search through table
$(document).ready(function () {
  $("#SMAInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#SMATable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#MFInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#MFTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#ASXInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#ASXTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(".invest-search1 > .select").click(function () {
  let result = $("input[name='SMAcheck']:checked");
  result.each(function () {
    //add investments
    $("#SMATable").append(
      "<tr><td scope='col'>" +
        $(this).parent().siblings(".SAPIR").text() +
        "</td><td scope='col'>" +
        $(this).parent().siblings(".SMA-name").text() +
        "</td><td class='MER' scope='col'><span class='MER2'>" +
        $(this).parent().siblings(".smer").text() +
        "</span>($<span class='MER1'>0</span>)" +
        "</td> <td class='NBO' scope='col'>" +
        $(this).parent().siblings(".nabo").text() +
        "</td> <td scope='col' class='val1'>" +
        "$<span class='val2'>0</span></td>" +
        "<td scope='col' class='perc perc1'>" +
        "<input type=number placeholder='%' min='0' max='99' step='0.01'>  </td>" +
        "<td scope='col'> <span class='del'> X </span> </td>"
    );
    $("input[name='SMAcheck']").prop("checked", false);
  });
  activeTable();
});

//Funds
$(".invest-search2 > .select").click(function () {
  let result = $("input[name='fundcheck']:checked");
  result.each(function () {
    //add TR for investment
    $("#fundTable").append(
      "<tr><td scope='col'>" +
        $(this).parent().siblings(".MFAPIR").text() +
        "</td><td scope='col'>" +
        $(this).parent().siblings(".MFname").text() +
        "</td><td class='MER' scope='col'><span class='MER2'>" +
        $(this).parent().siblings(".mer1").text() +
        "</span>($<span class='MER1'>0</span>)" +
        "</td> <td class='NBO' scope='col'>" +
        $(this).parent().siblings(".nabo1").text() +
        "</td> <td scope='col' class='val1'>" +
        "$<span class='val2'>0</span></td>" +
        "<td scope='col' class='perc perc1'>" +
        "<input type='number' placeholder='%' min='0' max='99' step='0.01'>  </td>" +
        "<td scope='col'> <span class='del'> X </span> </td>"
    );
    $("input[name='fundcheck']").prop("checked", false);
  });
  activeTable();
});

//Shares
$(".invest-search3 > .select").click(function () {
  let result = $("input[name='ASXcheck']:checked");
  result.each(function () {
    //add TR for investment
    $("#ASXTable1").append(
      "<tr><td scope='col'>" +
        $(this).parent().siblings(".code1").text() +
        "</td><td scope='col'>" +
        $(this).parent().siblings(".share-name").text() +
        "</td><td scope='col'>" +
        $(this).parent().siblings(".category").text() +
        "</td> <td scope='col' class='val1'>" +
        "$<span class='val2'> 0 </span></td>" +
        "<td scope='col' class='perc si'>" +
        "<input type='number' placeholder='%' min='0' max='99' step='0.01'>  </td>" +
        "<td scope='col'> <span class='del'> X </span> </td>"
    );
    $("input[name='ASXcheck']").prop("checked", false);
  });
  activeTable();
});

let test1 = document.querySelectorAll(".test1");

for (let i = 0; i < test1.length; i++) {
  test1[i].addEventListener("click", function () {
    alert("poop");
  });
}
