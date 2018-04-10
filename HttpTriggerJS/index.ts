import { HttpContext, FunctionRequest, HttpStatusCodes } from 'azure-functions-types'

module.exports = function (context: HttpContext, req: FunctionRequest) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let guess = Number.parseInt(req.query.guess)

    if (guess) {
        let answer = drawRandomNumber()

        if (guess === answer) {
            context.res = {
                body: "You win!"
            };
        } else{
            context.res = {
                body: `Sorry, you guessed ${guess}, but the drawing was ${answer}. Please try again!`
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a guess on the query string. Guesses must be numbers."
        };
    }
    context.done();
};

function drawRandomNumber(){
    return Math.round(Math.random() * 100)
}