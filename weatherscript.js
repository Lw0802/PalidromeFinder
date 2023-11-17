// script.js

function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    // Call the API Gateway endpoint
    fetch('https://dsyee789jg.execute-api.us-east-1.amazonaws.com/Stage1', {
      method: 'POST',
      body: JSON.stringify({ city: cityName }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
  
  function displayWeather(weatherData) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
  
    if (weatherData.error) {
      weatherInfoDiv.innerHTML = `<p>${weatherData.error}</p>`;
    } else {
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
  
      weatherInfoDiv.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
    }
  }
  