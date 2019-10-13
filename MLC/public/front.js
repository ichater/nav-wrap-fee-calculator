let sharList, managedFund, shareName  = [],
    ASX = {};


let showASX = function(){
    for(let prop in ASX){
        console.log(prop);
        console.log(ASX[prop]);
    };
}

//fetching Share data and saving to vaiable
fetch("./Data/NAVMFs.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    managedFund = data;
});


//Fetching managed fund data and saving to variable.
fetch("./Data/NavShares1.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    shareList = data;
    ASX = data.ASXcode;
    shareName = data.ListedInvestmentName
});

  
  function addASX(){
    let fundTable = document.getElementById("ASXTable");
    let row = ASXTable.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell(); 
  }
  
  function addMF(){
      let fundTable = document.getElementById("fundTable");
      let row = fundTable.insertRow();
      let cell1 = row.insertCell();
      let cell2 = row.insertCell();
      let cell3 = row.insertCell();
      let cell4 = row.insertCell();
  };


$("#addVal").one("click",(function(){  
        let toDoText = $('#myNum').val();
		$(toDoText).val("");
		$("#totalBalance").append("<h2> $" + toDoText + "</h2>")	
}));

$("input[type='number']").keypress(function(event){
	//13 = enter key, this is how you check if enter key is hit
	if(event.which === 13){
        let toDoText = $('#myNum').val();
		$(toDoText).val("");
        $("#totalBalance").append("<h2> $" + toDoText + "</h2>")
	}
});


