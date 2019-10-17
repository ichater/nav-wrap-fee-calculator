const   express = require ("express"),
        app = express(),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/NavShares1", { useNewUrlParser: true }); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/feecalculator", function(req, res){
    ASX = require("./public/Data/NavShares1.json");
    MF = require("./public/Data/NAVMFs.json");
    SMA = require("./public/Data/SMA.json")
	res.render("calculator.ejs",[{ASX, ASX},{SMA: SMA},{MF: MF}]);
});

app.get("/test", function(req, res){
    ASX = require("./public/Data/NavShares1.json");
    MF = require("./public/Data/NAVMFs.json");
    SMA = require("./public/Data/SMA.json")
    res.render("test",[{ASX, ASX},{SMA: SMA},{MF: MF}]);
});

app.listen(3000, function(){
	console.log('listening on port 3000')
});
