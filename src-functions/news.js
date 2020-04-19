const axios = require('axios');

const URL = "https://newsapi.org/v2/top-headlines";
const { API_KEY } = process.env;

if(!API_KEY){
  console.log("API_KEY is not set!");
}

exports.handler = async (event, context) => {

  if (event.httpMethod !== "POST") {
   return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = JSON.parse(event.body);
  const country = params.country;

  return axios.get(`${URL}?country=${country}&apiKey=${API_KEY}`, { headers: { "Accept": "application/json" } })
    .then(response => ({statusCode: 200, body: JSON.stringify(response.data.articles)}))
    .catch(error => ({statusCode: 422, body: String(error)}))
}
