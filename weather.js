
    const b=document.getElementById("b");
    const linput=document.getElementById("linput");
    const loinput=document.getElementById("loinput");
    const aqi=document.getElementById("aqi");
    const co=document.getElementById("co");
    const no2=document.getElementById("no2");
    const o3=document.getElementById("o3");
    const pm2=document.getElementById("pm2");
    const cityname=document.getElementById("cityname");
    const countryname=document.getElementById("countrycode");
    let popup=document.getElementById("popup"); 
    let overlay=document.getElementById("overlay"); 
   b.addEventListener("click",(event=>{
    event.preventDefault();
    
    
    const latitude=linput.value;
    const longitude=loinput.value;
    const url = `https://air-quality.p.rapidapi.com/current/airquality?lon=${longitude}&lat=${latitude}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7faefdf719msh7d8d68820c8a714p191f74jsne8ca8bec1540',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};
fetch(url,options)
.then(response=>response.json())
.then(result=>{
    console.log(result);
    let readings=result.data[0];
    console.log(readings);
    const city=result.city_name;
    const country=result.country_code;
    console.log(city);
    console.log(country);
    aqi.textContent=readings.aqi;
    co.textContent=readings.co;
    no2.textContent=readings.no2;
    o3.textContent=readings.o3;
    pm2.textContent=readings.pm25;
    cityname.textContent=city;
    countryname.textContent=country;
    


})




   }));
    function openpopup(){
        popup.classList.add("popupnew");
        overlay.style.visibility="visible";
       
      
    }
    function closepopup(){
        popup.classList.remove("popupnew");
       setTimeout(()=>{overlay.style.visibility="hidden";}

       ,200 ); 
        
    }

