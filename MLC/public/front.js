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
    shareName = data
    showASX();
});
