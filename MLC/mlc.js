const   express = require ("express"),
        app = express(),
        bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.listen(3000, function(){
	console.log('listening on port 3000')
});
