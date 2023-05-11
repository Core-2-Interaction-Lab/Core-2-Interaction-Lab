const apiUrl="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.5235&longitude=13.4115&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,aerosol_optical_depth,dust,uv_index,uv_index_clear_sky,ammonia,alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen,us_aqi,us_aqi_pm2_5,us_aqi_pm10,us_aqi_no2,us_aqi_co,us_aqi_o3,us_aqi_so2&domains=cams_global&timezone=America%2FNew_York&past_days=1";

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  console.log(data); 

})
