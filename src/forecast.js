const request=require("request");

const forecast=function(lat,long,callback){
    request({
        url:"http://api.weatherstack.com/current?access_key=78513ac01847d14cd354f829a5990811&query="+lat+","+long,
        json:true
    },(error,response)=>{
        const currentData=response.body.current;
        if(error){
            callback("CAnnot connect to weather api server",undefined);
        }
        else if(response.body.error){
            callback("Not a valid entry",undefined);
        }else{
            
            //console.log();
            const data={
                temp:`It is currently ${currentData.temperature} degrees. It feels like ${currentData.feelslike} degrees outside`,
                desc:`Current Sky: ${currentData.weather_descriptions[0]} `
            }
            callback(undefined,data);
        }
    
        
        
    });
}
module.exports=forecast;