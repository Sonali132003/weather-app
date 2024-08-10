async function weather(){
    const cityname=document.querySelector('#search input').value;
     console.log(cityname);
    const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=c2e89a6c508d87d608915ad1c08aa8f5 `;
    const res= await fetch(url);
    // console.log(res);
    const data=  await res.json();
    console.log(data);
    if(data.cod=='404'){
    error.style.display="block";
    main.style.display="none";

    }
    else{
    console.log(data.main.temp);
    temp.innerHTML=Math.round(data.main.temp)+"℃";
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('humidity').innerHTML=data.main.humidity;
    document.getElementById('wind').innerHTML=data.wind.speed+"km/hr";
    main.style.display="none";
    main.style.display="block";
    }
}

