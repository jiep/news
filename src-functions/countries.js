const ALLOWED_COUNTRIES = "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za".split(" ");

exports.handler = async (event, context) => {

  if (event.httpMethod !== "GET") {
   return { statusCode: 405, body: "Method Not Allowed" };
  }

  return {statusCode: 200, body: JSON.stringify(ALLOWED_COUNTRIES)}
}
