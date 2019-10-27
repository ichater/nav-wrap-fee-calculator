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
        $(".totalBalance span").text(dollars)      	
}));

//display fees in table
function S22(amount){
    if((amount/100) < 200000){
        if(amount/100 *.004 < 375){
            $(".t1 span").text(375);
        } else {
            $(".t1 span").text(roundToTwo((amount/100) *.004));	
    }}
    else if((amount/100) > 200000 && (amount/100) < 500000){
        $(".t1 span").text(800);
        $(".t2 span").text(roundToTwo(((amount/100) - 200000)* .0015));
    } 
    else{
        $(".t1 span").text(800);
        $(".t2 span").text(450);
            if(((amount/100) - 500000) * .0003 + 1250 > 2400){
            $(".t3 span").text(1150)
            } else{
                $(".t3 span").text(roundToTwo(((amount/100) - 500000) * .0003));
            }
}
};
//total fee.
function totalFee(){
    let toDoText = $('#c2').val(); 
        var dollars = $('#c2').val()/ 100;  
	$(toDoText).val("");
    S22(toDoText)
    a=0
    b = (a) => {
        if(a > 2400){
            return 2400
        } else{
            return a
        }
    }
    $(".totals-table span").each(function(){     
            a += parseFloat(
                $(this).text() 
            )      
    });
    $(".total").text(b(a));
}
$("#c2").on("keyup",function(){
    totalFee();
});
$(".perc1 input[type=number]").on("keyup",function(){
    totalFee();
});

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


//add Selected investments and calculate MERs + total value based off % input
//SMA
$(".invest-search1 > .select").click(function(){
    let result = $("input[name='SMAcheck']:checked");
    result.each(function(){
        //add investments  
        $("#SMATable").append(
            "<tr><td scope='col'>"  + $(this).parent().siblings(".SAPIR").text()+
            "</td><td scope='col'>" + $(this).parent().siblings(".SMA-name").text() +
            "</td><td class='MER' scope='col'><span class='MER2'>" 
            + $(this).parent().siblings(".smer").text() +
            "</span>($<span class='MER1'>0</span>)" + 
            "</td> <td class='NBO' scope='col'>" + $(this).parent().siblings(".nabo").text() + 
            "</td> <td scope='col' class='val1'>" + 
            "$<span class='val2'>0</span></td>" + 
            "<td scope='col' class='perc perc1'>" +
            "<input type=number placeholder='%' min='0' max='99' step='0.01'>  </td>"
            + "<td scope='col'> <span class='del'> X </span> </td>"  
            //delete added investment
        ).delegate(".del", "click", function(){
            $(this).parent().siblings().fadeOut(500, function(){
                $(this).remove();
            });
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
            });
            event.stopPropagation();
        }// add in % and auto populate $ value of investment.
        ).delegate(".perc input[type=number]", "keyup", function(){
            let toDoText = (roundToTwo($('#c2').val()/100));
            let answer = (roundToTwo(toDoText/100) * $(this).val())
            $(this).parent().siblings(".val1").children(".val2").text(answer)
        })
           //MER dollar value
           .delegate(".perc input[type=number]", "keyup", function(){
            let toDoText = (roundToTwo($('#c2').val()/100));
            let a = (roundToTwo(toDoText/100) * $(this).val())
            let b = $(this).parent().siblings(".MER").children(".MER2").text();
            let answer = roundToTwo(a/100) * Number(b);
            $(this).parent().siblings(".MER").children(".MER1").text(roundToTwo(answer));
        })   
        $("input[name='SMAcheck']").prop("checked", false);
    })
});
//Funds
$(".invest-search2 > .select").click(function(){
    let result = $("input[name='fundcheck']:checked");
    result.each(function(){
        //add TR for investment
        $("#fundTable").append(
            "<tr><td scope='col'>"  + $(this).parent().siblings(".MFAPIR").text()+
            "</td><td scope='col'>" + $(this).parent().siblings(".MFname").text() +
            "</td><td class='MER' scope='col'><span class='MER2'>" 
            + $(this).parent().siblings(".mer1").text() +
            "</span>($<span class='MER1'>0</span>)" + 
            "</td> <td class='NBO' scope='col'>" + $(this).parent().siblings(".nabo1").text() + 
            "</td> <td scope='col' class='val1'>" + 
            "$<span class='val2'>0</span></td>" + 
            "<td scope='col' class='perc perc1'>" +
            "<input type='number' placeholder='%' min='0' max='99' step='0.01'>  </td>"
            + "<td scope='col'> <span class='del'> X </span> </td>"
            //delete added investment
        ).delegate(".del", "click", function(){
            $(this).parent().siblings().fadeOut(500, function(){
                $(this).remove();
            });
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
            })
            event.stopPropagation();
            //calculate value based off %
        }).delegate(".perc input[type=number]", "keyup", function(){
            let toDoText = (roundToTwo($('#c2').val()/100));
            let answer = (roundToTwo(toDoText/100) * $(this).val())
            $(this).parent().siblings(".val1").children(".val2").text(answer)
        })
            //MER dollar value
            .delegate(".perc input[type=number]", "keyup", function(){
                let toDoText = (roundToTwo($('#c2').val()/100));
                let a = (roundToTwo(toDoText/100) * $(this).val())
                let b = $(this).parent().siblings(".MER").children(".MER2").text();
                let answer = roundToTwo(a/100) * Number(b);
                $(this).parent().siblings(".MER").children(".MER1").text(roundToTwo(answer));
            })        
        $("input[name='fundcheck']").prop("checked", false);
    })
});
//Shares
$(".invest-search3 > .select").click(function(){
    let result = $("input[name='ASXcheck']:checked");
    result.each(function(){  
        //add TR for investment
        $("#ASXTable1").append(
            "<tr><td scope='col'>"  + $(this).parent().siblings(".code1").text()+
            "</td><td scope='col'>" + $(this).parent().siblings(".share-name").text() +
            "</td><td scope='col'>" + $(this).parent().siblings(".category").text() + 
            "</td> <td scope='col' class='val1'>" + 
            "$<span class='val2'> 0 </span></td>" + 
            "<td scope='col' class='perc si'>" +
            "<input type='number' placeholder='%' min='0' max='99' step='0.01'>  </td>"
            + "<td scope='col'> <span class='del'> X </span> </td>"  
            //delete added table         
        ).delegate(".del", "click", function(){
                $(this).parent().siblings().fadeOut(500, function(){
                    $(this).remove();
                });
                $(this).parent().fadeOut(500, function(){
                    $(this).remove();
                });
                event.stopPropagation();
        }
        // add in % and auto populate $ value of investment.
        )
        $("input[name='ASXcheck']").prop("checked", false);
    })
});

  //tabbed content (different searches)
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


// Calculate and dsisplay total MERs
$(document).on("keyup",".perc input[type=number]", function(){ 
    let total2 = 0;   
    $(".MER1").each(function(){
        total2 += parseFloat(
            $(this).text() 
        )      
    });
    $(".MERtotal span").text((roundToTwo(total2)));  
})


$(document).on("keyup", ".si input[type=number]", function(){
    //add to value based on input % of total balance.
    let toDoText = (roundToTwo($('#c2').val()/100));
    let answer = (roundToTwo(toDoText/100) * $(this).val())
    $(this).parent().siblings(".val1").children(".val2").text(answer);
    //calculate the .15% listed fee and populate below data.
    let answer1 = 0;
    $(".val2").each(function(){
        answer1 += parseFloat(
            $(this).text() 
        )      
    });
    $(".listedFee span").text((roundToTwo((answer1/100)*0.15)))            
})
//If a MF or SMA is not Nab Owned then fee it at .1%
$(document).on("keyup", ".perc1 input[type=number]", function(){
    let a = $(this).parent().siblings(".NBO").text();
    let b = 0
if(!(a.includes("#"))){
    $(this).parent().siblings(".val1").children(".val2").addClass("Nfee")   
        }
        $(".Nfee").each(function(){
            b += parseFloat(
                $(this).text() 
            )      
        });
        $(".nabOT span").text((roundToTwo(b/1000)))
    } 
);



// calculate total %
$(document).on("keyup",".perc input[type=number]", function(){ 
    a=0;
    b= parseFloat($(".totalBalance").text()) - a;
    $(".perc input[type=number]").each(function(){
        if($(this).val() != ""){
            a += parseFloat(
                $(this).val() 
            )      
        }
    });
    if(a > 99){
        alert("over 99% investment value.")
    }
    });

// cash account total
$(document).on("keyup",".perc input[type=number]", function(){ 
    a=0;
    b=$("#c2").val()/100;
    $(".val2").each(function(){
            a += parseFloat(
                $(this).text())      
        }
    );
   $(".cashBalance span").text("$" + roundToTwo(b-a))
});

