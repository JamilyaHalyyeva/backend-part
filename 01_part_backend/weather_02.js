const arguments =process.argv.slice(2);
console.log("argument: ", arguments);
const city= arguments[0];

async function getData(){

    const API_KEY="500bb029e1cd21a82604d70e4c250982";
    const BASE_URL="https://api.openweathermap.org/data/2.5/weather";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const response =await fetch(`${BASE_URL}?q=${city}&appid=${
        API_KEY}&units=metric`);

        const data=await response.json();
    console.log("data: ",data.weather[0].main);
    console.log("temperature: ",data.main.temp);

}
getData();