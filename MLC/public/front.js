function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

// function investmentValueDollar(){
//     a=0
//     $(".perc input[type=number]").each(function(){
//         if($(this).val() != ""){
//             a += parseFloat(
//                 $(this).val() 
//             )      
//         }
//     });
// }

function cashAccount(){
    a=0;
    b=$("#c2").val()/100;
    $(".val2").each(function(){
            a += parseFloat(
                $(this).text())      
        }
    );
   $(".cashBalance span").text(roundToTwo(b-a))
}
//If a MF or SMA is not Nab Owned then fee it at .1%
function nabOwned(){
    let a = $(".perc1 input[type=number]").siblings(".NBO").text();
    let b = 0
if(!(a.includes("#"))){
    $(".val2").addClass("Nfee")   
        }
        $(".Nfee").each(function(){
            b += parseFloat(
                $(this).text() 
            )      
        });
        $(".nabOT span").text((roundToTwo(b/1000)))
}

function MERTotal(){
    let total2 = 0;   
    $(".MER1").each(function(){
        total2 += parseFloat(
            $(this).text() 
        )      
    });
    $(".MERtotal span").text((roundToTwo(total2))); 
}

function investmentValueperc(){
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
}

function investMER(){
    $(".perc1 input[type=number]").each(function(){   
        let a = parseFloat(
            $(this).parent().siblings(".val1").children(".val2").text()
        )
        let b = parseFloat(
            $(this).parent().siblings(".MER").children(".MER2").text()
        )  
        let answer = a * b;
        $(this).parent().siblings(".MER").children(".MER1").text(roundToTwo(answer));
})
}
//total fee.
function totalFee(){
    let toDoText = $('#c2').val(); 
        var dollars = $('#c2').val()/ 100;  
	$(toDoText).val("");
    S22(toDoText)
    a=0
    b = (c) => {
        if(c > 2400){
            return 2400
        } else{
            return c
        }
    }
    $(".totals-table span").each(function(){     
            a += parseFloat(
                $(this).text() 
            )      
    });
    $(".total").text(b(a));
}

//display total balance pretty
function displayPretty(){ 
    let dollars = $('#c2').val()/ 100;
    $(".totalBalance span").text(dollars);
}

$(document).on("keyup", "#c2", function(){ 
    displayPretty();
    investmentValueperc();
    cashAccount(); 
    nabOwned();    
    MERTotal();
    totalFee();	
});
// cash account total
$(document).on("keyup",".perc input[type=number]", function(){ 
    cashAccount();
    investmentValueperc();
    nabOwned();
    investMER()
    MERTotal();
    totalFee();
});

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

// $("#c2").on("keyup",function(){
//     totalFee();
// });
// $(document).on("keyup", ".perc input[type=number]", function(){
//     totalFee();
// });

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








