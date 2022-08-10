window.addEventListener('load', ()=> {
    let lon;
    let lat;
    const API_key = "7723ff91f82f7840f8cf92b3d7072784";

    let tempValue = document.getElementById('temp-value');
    let tempDescription = document.getElementById('temp-description');

    let locationCity = document.getElementById('location-city');
    let animateIcon = document.getElementById('animate-icon');


    if (navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
        lon = posicion.coords.longitude
        lat = posicion.coords.latitude
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${API_key}`;
        // console.log(url_api)

        fetch(url)
            .then( response => { return response.json() })
            .then(data => {
                console.log(data.main.temp)
                let temp = Math.round(data.main.temp)
                tempValue.textContent = `${temp} °C`
                tempDescription.textContent = data.weather[0].description
                locationCity.textContent = data.name
              
                switch(data.weather[0].main) {
                    case 'Clouds':
                        animateIcon.src = '/animation/cloudy.svg'
                    break;
                    case 'Clear':
                        animateIcon.src = '/animation/day.svg'
                    break;

                    case 'ThunderStorm':
                        animateIcon.src = '/animation/thunder.svg'
                    break;
                    case 'Drizzle':
                        animateIcon.src = '/animation/rainy-2.svg'
                    break;
                    case 'Snow':
                        animateIcon.src = '/animation/snowy-6.svg'
                    break;
                    case 'Atmosphere':
                        animateIcon.src = '/animation/weather.svg'
                    break;

                    default:
                        animateIcon.src = '/animation/day.svg'
                    break;
                }


                console.log(data)
            })
            .catch(error => { console.log(error) })
       })
    }


})



