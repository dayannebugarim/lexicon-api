"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
const notFound = (res) => {
    return res.status(404).send({ error: `Word Not Found` });
};
exports.notFound = notFound;
