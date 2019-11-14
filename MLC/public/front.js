function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

// make Table elements invisible if investments not selected.

function activeTable() {
  const ASXTable = document.querySelector("#ASXTable1");
  const listed = document.querySelector(".listed");
  if (ASXTable.children.length > 1) {
    listed.classList.remove("inactive");
  } else {
    listed.classList.add("inactive");
  }
  const fundTable = document.querySelector("#fundTable");
  const funded = document.querySelector(".funded");
  if (fundTable.children.length > 1) {
    funded.classList.remove("inactive");
  } else {
    funded.classList.add("inactive");
  }
  const SMATable = document.querySelector("#SMATable");
  const seperateManage = document.querySelector(".seperateManage");
  if (SMATable.children.length > 1) {
    seperateManage.classList.remove("inactive");
  } else {
    seperateManage.classList.add("inactive");
  }
}

function cashAccount() {
  a = 0;
  b = $("#c2").val() / 100;
  $(".val2").each(function() {
    a += parseFloat($(this).text());
  });
  $(".cashBalance span").text(roundToTwo(b - a));
}
//If a MF or SMA is not Nab Owned then fee it at .1%
function nabOwned() {
  let b = 0;
  $(".NBO").each(function() {
    if (
      !$(this)
        .text()
        .includes("#")
    ) {
      $(this)
        .siblings(".val1")
        .children(".val2")
        .addClass("Nfee");
    }
  });
  $(".Nfee").each(function() {
    b += parseFloat($(this).text());
  });
  $(".nabOT span").text(roundToTwo(b / 1000));
}

//Mer totals
function MERTotal() {
  let total2 = 0;
  $(".MER1").each(function() {
    total2 += parseFloat($(this).text());
  });
  $(".MERtotal span").text(roundToTwo(total2));
}

function investmentValueperc() {
  a = 0;
  b = parseFloat($(".totalBalance").text()) - a;
  $(".perc input[type=number]").each(function() {
    if ($(this).val() != "") {
      a += parseFloat($(this).val());
    }
  });
  if (a > 99) {
    alert("over 99% investment value.");
  }
}

function investMER() {
  $(".perc1 input[type=number]").each(function() {
    let a = parseFloat(
      $(this)
        .parent()
        .siblings(".val1")
        .children(".val2")
        .text()
    );
    let b = parseFloat(
      $(this)
        .parent()
        .siblings(".MER")
        .children(".MER2")
        .text()
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
  $(".perc input[type=number]").each(function() {
    let answer = roundToTwo(toDoText / 100) * $(this).val();
    $(this)
      .parent()
      .siblings(".val1")
      .children(".val2")
      .text(answer);
  });
}
//Listed Investment value
function shareFee() {
  let a = 0;
  $(".si input[type=number]").each(function() {
    $(this)
      .parent()
      .siblings(".val1")
      .children(".val2")
      .each(function() {
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
  $(".totals-table span").each(function() {
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
    $(".legislationFee .legislationFee1").text(roundToTwo(b * 0.025));
  } else {
    $(".legislationFee .legislationFee1").text(600);
  }
}
//pension min and max
function minMaxPension(){
  a = $("#c2").val() / 100;
  b = $(".age").text()
  $(".pensionMax").text(a)
//minimum pension calc
  if(b < 65){
    $(".pensionMin").text(roundToTwo((a/100)*4))
    $(".pensionMinPerc").text(4)
  }
  if(b >= 65 && b <= 74){
    $(".pensionMin").text(roundToTwo((a/100)*5))
    $(".pensionMin").text(5)
  }
  if(b >= 65 && b <= 79){
    $(".pensionMin").text(roundToTwo((a/100)*6))
    $(".pensionMin").text(6)
  }
  if(b >= 80 && b <= 84){
    $(".pensionMin").text(roundToTwo((a/100)*7))
    $(".pensionMin").text(7)
  }
  if(b >= 85 && b <= 89){
    $(".pensionMin").text(roundToTwo((a/100)*9))
    $(".pensionMin").text(9)
  }
  if(b >= 90 && b <= 94){
    $(".pensionMin").text(roundToTwo((a/100)*11))
    $(".pensionMin").text(11)
  }
  if(b >= 95){
    $(".pensionMin").text(roundToTwo((a/100)*14))
    $(".pensionMin").text(14)
  }
}


$(document).on("keyup", "#c2", function() {
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
});
// cash account total
$(document).on("keyup", ".perc input[type=number]", function() {
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
});
// Delete
$(document).on("click", ".del", function() {
  $(this)
    .parent()
    .siblings()
    .fadeOut(500, function() {
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
    });
  $(this)
    .parent()
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

//Search through table
$(document).ready(function() {
  $("#SMAInput").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#SMATable tr").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});

$(document).ready(function() {
  $("#MFInput").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#MFTable tr").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});

$(document).ready(function() {
  $("#ASXInput").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#ASXTable tr").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});

// //tabbed content (different searches)
// const tabs = document.querySelector(".tabs");
// const pannels = document.querySelectorAll(".panel");

// tabs.addEventListener("click", function(e) {
//   if (e.target.tagName == "BUTTON") {
//     const targetPanel = document.querySelector(e.target.dataset.target);
//     pannels.forEach(function(panel) {
//       if (panel == targetPanel) {
//         panel.classList.add("active");
//       } else {
//         panel.classList.remove("active");
//       }
//     });
//   }
// });

$(".invest-search1 > .select").click(function() {
  let result = $("input[name='SMAcheck']:checked");
  result.each(function() {
    //add investments
    $("#SMATable").append(
      "<tr><td scope='col'>" +
        $(this)
          .parent()
          .siblings(".SAPIR")
          .text() +
        "</td><td scope='col'>" +
        $(this)
          .parent()
          .siblings(".SMA-name")
          .text() +
        "</td><td class='MER' scope='col'><span class='MER2'>" +
        $(this)
          .parent()
          .siblings(".smer")
          .text() +
        "</span>($<span class='MER1'>0</span>)" +
        "</td> <td class='NBO' scope='col'>" +
        $(this)
          .parent()
          .siblings(".nabo")
          .text() +
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
$(".invest-search2 > .select").click(function() {
  let result = $("input[name='fundcheck']:checked");
  result.each(function() {
    //add TR for investment
    $("#fundTable").append(
      "<tr><td scope='col'>" +
        $(this)
          .parent()
          .siblings(".MFAPIR")
          .text() +
        "</td><td scope='col'>" +
        $(this)
          .parent()
          .siblings(".MFname")
          .text() +
        "</td><td class='MER' scope='col'><span class='MER2'>" +
        $(this)
          .parent()
          .siblings(".mer1")
          .text() +
        "</span>($<span class='MER1'>0</span>)" +
        "</td> <td class='NBO' scope='col'>" +
        $(this)
          .parent()
          .siblings(".nabo1")
          .text() +
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
$(".invest-search3 > .select").click(function() {
  let result = $("input[name='ASXcheck']:checked");
  result.each(function() {
    //add TR for investment
    $("#ASXTable1").append(
      "<tr><td scope='col'>" +
        $(this)
          .parent()
          .siblings(".code1")
          .text() +
        "</td><td scope='col'>" +
        $(this)
          .parent()
          .siblings(".share-name")
          .text() +
        "</td><td scope='col'>" +
        $(this)
          .parent()
          .siblings(".category")
          .text() +
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
  test1[i].addEventListener("click", function() {
    alert("poop");
  });
}
