const createError = require("http-errors");

const displayErrors = ((_request, _response, next) => {
    next(createError(404));
});

module.exports = { displayErrors };