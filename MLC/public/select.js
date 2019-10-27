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