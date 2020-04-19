const axios = require('axios');

const URL = "https://newsapi.org/v2/top-headlines?country=us";
const { API_KEY } = process.env;

if(!API_KEY){
  console.log("API_KEY not set!");
}


exports.handler = async (event, context) => {

  if (event.httpMethod !== "GET") {
   return { statusCode: 405, body: "Method Not Allowed" };
  }

  return axios.get(`${URL}&apiKey=${API_KEY}`, { headers: { "Accept": "application/json" } })
    .then(response => ({statusCode: 200, body: JSON.stringify(response.data.articles)}))
    .catch(error => ({statusCode: 422, body: String(error)}))
}
