function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

//display total balance pretty
$("#c2").on("keyup",(function(){ 
        let toDoText = $('#c2').val(); 
        var dollars = $('#c2').val()/ 100;
        dollars = dollars.toLocaleString("en-US", 
        {style:"currency", currency:"AUD"});
		$(toDoText).val("");
        $("#totalBalance h2").text(dollars)       	
}));

function S22(amount){
    if((amount/100) < 200000){
        if(amount/100 *.004 < 375){
            $(".t1").text(375);
        } else {
            $(".t1").text(roundToTwo((amount/100) *.004));	
    }}
    else if((amount/100) > 200000 && (amount/100) < 500000){
        $(".t1").text(800);
        $(".t2").text(roundToTwo(((amount/100) - 200000)* .0015));
    } 
    else{
        $(".t1").text(800);
        $(".t2").text(450);
            if(((amount/100) - 500000) * .0003 + 1250 > 2400){
            $(".t3").text(1150)
            } else{
                $(".t3").text(roundToTwo(((amount/100) - 500000) * .0003));
            }
}
};

$("#c2").on("keyup",(function(){
    let toDoText = $('#c2').val(); 
        var dollars = $('#c2').val()/ 100;
        dollars = dollars.toLocaleString("en-US", 
        {style:"currency", currency:"AUD"});  
	$(toDoText).val("");
    S22(toDoText)
    let total = (Number($(".t1").text()) + (Number($(".t2").text()) +(Number($(".t3").text()))))
    $(".total").text(total);
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
//SMA
$(".select1").click(function(){
    let result = $("input[name='SMAcheck']:checked");
    result.each(function(){
        //add investments  
        $("#SMATable").append(
            "<tr><th scope='col'>"  + $(this).parent().siblings(".SAPIR").text()+
            "</th><th scope='col'>" + $(this).parent().siblings(".SMA-name").text() +
            "</th><th scope='col'>" + $(this).parent().siblings(".smer").text() + 
            "</th><th scope='col'>" + $(this).parent().siblings(".nabo").text() + 
            "</th><th> <input type=number placeholder='$'></th>" + 
            "<th scope='col'> <input type=number placeholder='%'>  </th>"
            + "<th scope='col'> <span class='del'> X </span> </th>"  
            //delete added investment
        ).delegate(".del", "click", function(){
            $(this).parent().siblings().fadeOut(500, function(){
                $(this).remove();
            });
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
            });
            event.stopPropagation();
        }) 
        $("input[name='SMAcheck']").prop("checked", false);
    })
});
//Funds
$(".select2").click(function(){
    let result = $("input[name='fundcheck']:checked");
    result.each(function(){
        //add TR for investment
        $("#fundTable").append(
            "<tr><th scope='col'>"  + $(this).parent().siblings(".MFAPIR").text()+
            "</th><th scope='col'>" + $(this).parent().siblings(".MFname").text() +
            "</th><th scope='col'>" + $(this).parent().siblings(".mer1").text() + 
            "</th><th scope='col'>" + $(this).parent().siblings(".nabo1").text() + 
            "</th><th> <input type=number placeholder='$'></th>" + 
            "<th scope='col'> <input type=number placeholder='%'>  </th>"
            + "<th scope='col'> <span class='del'> X </span> </th>"
            //delete added investment
        ).delegate(".del", "click", function(){
            $(this).parent().siblings().fadeOut(500, function(){
                $(this).remove();
            });
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
            });
            event.stopPropagation();
        })
        $("input[name='fundcheck']").prop("checked", false);
    })
});
//Shares
$(".select3").click(function(){
    let result = $("input[name='ASXcheck']:checked");
    result.each(function(){  
        //add TR for investment
        $("#ASXTable1").append(
            "<tr><th scope='col'>"  + $(this).parent().siblings(".code1").text()+
            "</th><th scope='col'>" + $(this).parent().siblings(".share-name").text() +
            "</th><th scope='col'>" + $(this).parent().siblings(".category").text() + 
            "</th><th> <input type=number placeholder='$'></th>" + 
            "<th scope='col'> <input type=number placeholder='%'>  </th>"
            + "<th scope='col'> <span class='del'> X </span> </th>"  
            //delete added table         
        ).delegate(".del", "click", function(){
                $(this).parent().siblings().fadeOut(500, function(){
                    $(this).remove();
                });
                $(this).parent().fadeOut(500, function(){
                    $(this).remove();
                });
                event.stopPropagation();
        })
        $("input[name='ASXcheck']").prop("checked", false);
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


