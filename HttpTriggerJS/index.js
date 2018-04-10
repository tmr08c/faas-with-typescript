module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let guess = req.query.guess

    if (guess) {
        if (guess == 1) {
            context.res = {
                body: "You win!"
            };
        } else{
            context.res = {
                body: "Sorry, you didn't win. Please try again!"
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a guess on the query string."
        };
    }
    context.done();
};