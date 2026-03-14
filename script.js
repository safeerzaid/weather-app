const apiKey = '37492b26165a9be5f4d68d68db0fc51a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const input = document.querySelector('.text')
const searchBtn = document.querySelector('.searchBtn')
const weather = document.querySelector('.temp')
const weatherIcon = document.querySelector('.weather-icon')
const cityName = document.querySelector('.city')
const humidity =document.querySelector('.humidity')
const wind = document.querySelector('.wind')

async function checkWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`)
    const data = await response.json()
  
    weatherIcon.classList.remove('fadeIn')
    weatherIcon.offsetWidth

    weatherIcon.classList.add('fadeIn')
    cityName.classList.add('fadeIn')
    humidity.classList.add('fadeIn')
    wind.classList.add('fadeIn')

    weather.innerHTML = data.main.temp + '°'
    cityName.innerHTML = data.name
    humidity.innerHTML = data.main.humidity
    wind.innerHTML = data.wind.speed
    
    if (data.weather[0].main === 'Rain'){
        weatherIcon.src = 'images/rain.png'
    }else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = 'images/clear.png'
    }else if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    }else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }else if(data.weather[0].main === 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }
  } catch (error) {
    data.cod === '404'
  }
}

searchBtn.addEventListener('click', function() {
  checkWeather(input.value)
})

input.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') {
    checkWeather(input.value)
  }
})