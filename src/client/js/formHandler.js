// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=23abe556d12b81861a4dd18bec071de8&units=imperial';
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(url+'18104'+apiKey)
    .then(res => {
        return res.json()
    })
    //this will post the resulting data to the webpage
    .then(function(data) {
        document.getElementById('results').innerHTML = data.name
    })
}

export { handleSubmit }