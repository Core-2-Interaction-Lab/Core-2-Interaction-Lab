//formating weather api//
const weatherIcon=document.querySelector("weather-icon");
  
  fetch('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit,windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,winddirection_10m,winddirection_80m,winddirection_120m,winddirection_180m,windgusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_1cm,soil_moisture_1_3cm,soil_moisture_3_9cm,soil_moisture_9_27cm,soil_moisture_27_81cm,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FNew_York')
    .then(response => response.json())
    .then(data => {
      console.log(data);

  fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.5235&longitude=13.4115&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,aerosol_optical_depth,dust,uv_index,uv_index_clear_sky,ammonia,alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen,us_aqi,us_aqi_pm2_5,us_aqi_pm10,us_aqi_no2,us_aqi_co,us_aqi_o3,us_aqi_so2&domains=cams_global&timezone=America%2FNew_York&past_days=1')
    .then(response => response.json())
    .then(data => {
      console.log( data);
    })
      .catch(error => {
        console.log( error);
    })

      const temperature = Math.round(data.current_weather.temperature);
      
      document.querySelector(".city").innerHTML = "New York";
      document.querySelector(".temp").innerHTML = temperature + "°F";
      document.querySelector(".windspeed").innerHTML = data.current_weather.windspeed+"mph";

      creatParticles(temperature)
  })

const creatParticles = temperature => {

    // Get the container element
  var container = document.getElementById('container');
  
  // Calculate the number of circles to create
  var numCircles = temperature * 10;

  if (temperature > 90) {
    numCircles = 1000;
  }
  
  if (temperature > 80) {
    numCircles = 1000;
  }
  
  if (temperature > 70) {
    numCircles = 1000;
  }
  
  if (temperature > 60) {
    numCircles = 1000;
  }

  if (temperature > 50) {
    numCircles = 1000;
  }

  if (temperature < 40) {
    numCircles = 900;
  }

  if (temperature < 30) {
    numCircles = 700;
  }

  if (temperature < 20) {
    numCircles = 400;
  }

  if (temperature < 10) {
    numCircles = 200;
  }
  
  // Create and position the circles
  for (var i = 0; i < numCircles; i++) {
    // Create a new circle element
    var circle = document.createElement('div');
    circle.className = 'circle';
    
    // Randomly position the circle within the container
    var x = Math.random() * container.offsetWidth;
    var y = Math.random() * container.offsetHeight;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    
    // Add the circle to the container
    container.appendChild(circle);
  }

    // Add an event listener to the container element
    container.addEventListener('mousemove', function(event) {
        // Get the mouse position
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        
        // Move each circle away from the mouse
        var circles = document.getElementsByClassName('circle');
        for (var i = 0; i < circles.length; i++) {
          var circle = circles[i];
          var x = parseInt(circle.style.left);
          var y = parseInt(circle.style.top);
          var dx = x - mouseX;
          var dy = y - mouseY;
          var distance = Math.sqrt(dx*dx + dy*dy);
          var maxDistance = 50;
          if (distance < maxDistance) {
            var newX = x + dx * (maxDistance - distance) / distance;
            var newY = y + dy * (maxDistance - distance) / distance;
            circle.style.left = newX + 'px';
            circle.style.top = newY + 'px';
          }
        }

      });
  }
  
  
