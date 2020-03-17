/*Global Variables*/
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=419ade04141ebb7f1f6deeb95aba3892';
//const cityZipCode = '94040';
const countryCode = ',us'
const feelings = document.getElementById('feelings').nodeValue;

//Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+d.getDate()+'.'+d.getFullYear();


document.getElementById('generate').addEventListener('click', performAction);


function performAction(e){
    const cityZipCode = document.getElementById('zip').value;
    getData(baseURL+cityZipCode+countryCode+apiKey)
}


const postData = async (url = '', data = {})=>{
    // console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
};

const getData = async (url = '')=>{
    const response = await fetch(url);

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
};


const updateUI = async () => {
    const request = await fetch('all');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temp;
        document.getElementById('content').innerHTML = allData[0].content;
    } catch(error){
        console.log("error", error);
    }
};


postData('/addForecast', {temperature: '85F', date: '3/16/2020', user_response: 'good'})