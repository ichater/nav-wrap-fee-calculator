function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}


$("#c2").on("keyup",(function(){ 
        let toDoText = $('#c2').val(); 
        var dollars = $('#c2').val()/ 100;
        dollars = dollars.toLocaleString("en-US", 
        {style:"currency", currency:"AUD"});
		$(toDoText).val("");
        $("#totalBalance h2").text(dollars)       	
}));
//tiered structure based on total balance
function S2(amount){
    if(amount < 200000){
        $(".total").text('$' + roundToTwo(amount *.004));
    } 
    else if(amount > 200000 && amount < 500000){
        $(".total").text('$' + roundToTwo((amount - 200000)*.0015) + 800)
    } 
    else{
        $(".total").text(('$' + roundToTwo((amount - 500000)*.0003) + 1250))
    }
};

function S22(amount){
    if(amount < 200000){
        $(".t1").text("$" + roundToTwo(amount *.004));	
    } 
    else if(amount > 200000 && amount < 500000){
        $(".t1").text("$800");
        $(".t2").text("$" + roundToTwo((amount - 200000)* .0015));
    } 
    else{
        $(".t1").text("$800");
        $(".t2").text("$450");
        $(".t3").text("$" + roundToTwo((amount - 500000) * .0003));
    }
};

$("#c2").on("keyup",(function(){
    let toDoText = $('#c2').val(); 
        var dollars = $('#c2').val()/ 100;
        dollars = dollars.toLocaleString("en-US", 
        {style:"currency", currency:"AUD"});  
	$(toDoText).val("");
    S22(toDoText)
    S2(toDoText)
}));

//Search through table
        $(document).ready(function(){
            $("#SMAInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#SMATable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });

          $(document).ready(function(){
            $("#MFInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#MFTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });

          $(document).ready(function(){
            $("#ASXInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#ASXTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });


//add Selected investments
$(".select1").click(function(){
    let result = $("input[type='checkbox']:checked");
    result.each(function(){
        alert($(this).parent().siblings().text())
        console.log($(this).parent().siblings());
    })
});

  //tabbed content
  const tabs = document.querySelector('.tabs');
  const pannels =document.querySelectorAll('.panel');
  
  tabs.addEventListener("click", function(e){
      if(e.target.tagName == "BUTTON"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        pannels.forEach(function(panel){
            if(panel==targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
      };
  });

          

  