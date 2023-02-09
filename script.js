function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='204fe6f249517c37829154c881c13abf';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
        + city + '&appid='+apikey+'&units=metric')
        .then(Response=>Response.json())
        .then(data => {
            var t = data['main']['temp']
            document.getElementById("output").innerHTML = "The Temperature is:"+t;
        })
}