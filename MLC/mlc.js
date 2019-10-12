const   express = require ("express"),
        app = express(),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/NavShares1", { useNewUrlParser: true }); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.locals.NavShares = require("./../Data.json/NavShares1.json");

//Share Schema
const shareSchema = new mongoose.Schema({
    ASXCode: String,
    Name: String,
    Category: String
});

let Share = mongoose.model("Share", shareSchema);

// Share.create(
//     {
//         ASXCode: "WIN",
//         Name: "correct share",
//         Category: "profit"
//     }, function(err, etf){
//         if(err){
//             console.log(err)
//         } else {
//             console.log("created Share")
//             console.log(etf);
//         }
//     }
// );

Share.find({}, function(err, listed){
    if(err){
        console.log("Not found yet")
        console.log(err);
    } else {
        console.log("Found them!")
        console.log(listed)
    }
});

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/feecalculator", function(req, res){
	res.render("calculator.ejs");
});

app.listen(3000, function(){
	console.log('listening on port 3000')
});
