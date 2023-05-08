{
    const apiKey = "04f2a0ade63d5a8a06515f259d45a3a7";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

    async function checkWeather(){
        const response = await fetch(apiUrl + '&appid=${apiKey}');
        var data = await response.json();
    
        console.log(data);
    }

    checkWeather();
}