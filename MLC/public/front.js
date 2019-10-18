
$("#addVal").one("click",(function(){  
        let toDoText = $('#myNum').val();
        var dollars = $('#myNum').val()/ 100;
        dollars = dollars.toLocaleString("en-US", 
        {style:"currency", currency:"AUD"});
		$(toDoText).val("");
		$("#totalBalance").append("<h2>" + dollars + "</h2>")	
}));


//attempt to add enter key later
// $("input[type='number']").keypress(function(event){
// 	//13 = enter key, this is how you check if enter key is hit
// 	if(event.which === 13){
//         let toDoText = $('#myNum').val();
// 		$(toDoText).val("");
//         $("#totalBalance").append("<h2> $ <span>" + toDoText + "</span></h2>")
// 	}
// });

//will eventially become the calculator for annual admin fees.

function S2(amount){
    if(amount < 200000){
        return "tier 1: $" + amount *.004;
    } 
    else if(amount > 200000 && amount < 500000){
        return "tier 2: $" +((amount - 200000)*.0015 + 800)
    } 
    else{
        return "tier 3: $" +((amount - 500000)*.0003 + 1250)
    }
};

function S22(amount){
    if(amount < 200000){
        $(".t1").css("color","green");	
    } 
    else if(amount > 200000 && amount < 500000){
        $(".t2").css("color","green");
    } 
    else{
        $(".t3").css("color","green");
    }
};

$("#addVal").one("click",(function(){  
    let toDoText = $('#myNum').val();   
	$(toDoText).val("");
    $("#totalFee").append("<h2> admin fee " + S2(toDoText/100) + "</h2>");
    S22(toDoText)
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

  //tabbed content
  const tabs = document.querySelector('.tabs');
  const pannels =document.querySelectorAll('.panel');
  
  tabs.addEventListener("click", function(e){
      if(e.target.tagName == "LI"){
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

          