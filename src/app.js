const path=require("path");
const express=require("express");
const geocoding=require("./geocoding.js");
const forecast=require("./forecast.js");

const app=express();
const port=process.env.PORT || 3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.use(express.static("public"));






app.get("",(req,res) =>{
    res.render("home.ejs");
})

app.get("/help",(req,res)=>{
    res.send("Help Page");
})
app.get("/about",(req,res)=>{
    res.render("about.ejs");
})
app.get("/weather",(req,res)=>{
    
    if(!req.query.address){
        res.send({error:"Please anter a location and try again"});
    }
    else {
        geocoding(req.query.address,(error,data)=>{
            if(error){
                 res.send({error})
            }
            else{
                forecast(data.lat,data.long,(error,forecastData)=>{
                    if(error){
                        res.send({error});
                    }
                    else{
                         res.send({forecastData});
                    }
                })
            }
        })
    }
    
    
    // res.send({
    //     forecast: "Today is 100 degree celsius",
    //     location:"New Delhi, India"
    // });
})
app.get("*",(req,res) => {
    res.render("404")
})





//testing port
app.listen(port, ()=>{
    console.log("Listening on Port 3000, Server is up on Port"+port);
})             