const { ALLOWED_COUNTRIES } = require("./allowed_countries.js");
console.log(ALLOWED_COUNTRIES);

exports.handler = async (event, context) => {

  if (event.httpMethod !== "GET") {
   return { statusCode: 405, body: "Method Not Allowed" };
  }

  return {statusCode: 200, body: JSON.stringify(ALLOWED_COUNTRIES)}
}
