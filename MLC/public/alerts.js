$(".info1").on("click", function() {
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
    "A managed fund is one type of 'managed investment scheme'. ... An investment manager then buys and sells shares or other assets on your behalf. You are usually paid income or 'distributions' periodically. The value of your investment will rise or fall with the value of the underlying assets"
  );
});

$(".infoInvest").on("click", function() {
  alert(
    "Search through the investment tabs to add investments to portfolio"
  );
});

$(".infoSuperFee").on("click", function() {
  alert(
    "0.025% pa of your super or pension account balance in MLC Wrap Super Series 2 "+
    "The maximum Super administration fee you may pay "+
    "is $600 pa. Where you have Family account linking, "+
    "the maximum Super administration fee will be the "+
    "lesser of your individual cap or your share of the "+
    "family linking cap of $600 pa."
  )
});

$(".infocp").on("click", function() {
  alert(
    "Cash account minimum for pension accounts is 1% of account balance "
    + "plus either two upcoming monthly payments or one upcoming payment of any other type"
  )
});

$(".infoc").on("click", function() {
  alert(
    "Cash account minimum for pension accounts is 1% of account balance."
  )
});

$(".startHere").on("click", function() {
  alert(
    "Fill in details below and click submit when finished."
  )
});

$(".warningP").on("click", function(){
  alert("Nominated amount must be higher than the minimum but lower than the maximum pension")
})
