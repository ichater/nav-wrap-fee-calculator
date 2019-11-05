$(".info1 span").on("click", function() {
  alert(
    "Investments marked with a # are owned by NAB which means they will not be subject to the .1% P/A fee"
  );
});

$(".info2").on("click", function() {
  alert(
    "All listed investments incur a fee of .15% P/A" +
      " The turn around time for thse types of investments is the time it takes to find a buyer or seller plus two days"
  );
});

$(".info3").on("click", function() {
  alert(
    "Managed funds are investments that are managed for you " +
      " by a fund manager who will choose investments on your hehalf" +
      " the value of the fund will depend on the value of said investments." +
      " Fund managers charge an annual fee which is represented in the" +
      " MERs column"
  );
});
