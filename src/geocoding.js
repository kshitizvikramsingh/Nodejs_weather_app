
const request=require("request")


const geocoding=function (address,callback) {
    request({
        url: "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoia3NoaXRpejEyIiwiYSI6ImNrcDF1MDFhNzExYjcyd256MTJxbHk2bnkifQ.LD1IlxWAVNxBt9gKIRiQsg&limit=1",
        json:true
    },(error,response)=>{
        if (error){
           return callback(error,undefined);
        }
        else if (response.body.message){
            return callback(error,undefined);
        }else if (response.body.features.length===0){
            return callback("Try Again",undefined);
        }
        else{
            const data={
                lat:response.body.features[0].center[1],
                long:response.body.features[0].center[0],
                loc:response.body.features[0].place_name
            }
            return callback(undefined,data);
        }
    })
}


module.exports=geocoding;







// const request=require("request")


// const geocoding=function (address,callback) {
//     request({
//         url: "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoia3NoaXRpejEyIiwiYSI6ImNrcDF1MDFhNzExYjcyd256MTJxbHk2bnkifQ.LD1IlxWAVNxBt9gKIRiQsg&limit=1",
//         json:true
//     },(error,response)=>{
//         if (error){
//             callback(error,undefined);
//         }
//         else if (response.body.message){
//             callback(error,undefined);
//         }
//         else{
//             const data={
//                 lat:response.body.features[0].center[1],
//                 long:response.body.features[0].center[0],
//                 loc:response.body.features[0].place_name
//             }
//             callback(undefined,data);
//         }
//     })
// }


// module.exports=geocoding;