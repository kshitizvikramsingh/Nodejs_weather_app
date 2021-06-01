console.log("This script has been successfully loaded");

const form=document.querySelector('form');
const search=document.querySelector("#loc");
const button=document.querySelector("button");
const msg1=document.querySelector("#msg-1");
const msg2=document.querySelector("#msg-2");
const msg3=document.querySelector("#msg-3");
const image=document.querySelector("img");
console.log(form)
console.log(button)


form.addEventListener("submit",(e)=>{
        e.preventDefault()
       msg1.textContent="Loading..";
       msg2.textContent="";
       
        fetch("http://localhost:3000/weather?address="+ search.value).then((response)=>{
            response.json().then((data)=>{
                    if(data.error){
                        msg1.textContent=data.error;
                    }else{
                        const temp=data.forecastData.temp;
                        const desc={
                            d:data.forecastData.temp}
                        console.log(desc.d);
                        msg1.textContent=data.forecastData.temp;
                        msg2.textContent=data.forecastData.desc;
                        
                        
                       
                    }
            })
        })
})