window.addEventListener('load', ()=> {
    let lon;
    let lat;

    let tempValue = document.getElementById('temp-value');
    let tempDescription = document.getElementById('temp-description');

    let locationCity = document.getElementById('location-city');
    let animateIcon = document.getElementById('animate-icon');


    if (navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
        longitude = posicion.coords.longitude
        latitude = posicion.coords.latitude
        const url_api = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude},lon=${longitude},appid=7723ff91f82f7840f8cf92b3d7072784`;
        console.log(url_api)

        // fetch(url)
        //     .then( response => { return response.json() })
        //     .then(data => {
        //         console.log(data)



        //         .catch(error => {
        //             console.log(error)
        //         })
        //     })

       })
    }


})



