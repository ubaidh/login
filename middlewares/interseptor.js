
function Intercept(req, res, next) {
    console.log(req);
    next();
}


module.exports = {
    Intercept
};