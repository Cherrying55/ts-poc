"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_2 = require("express");
var http_status_1 = require("http-status");
var recipes_router_1 = require("routes/recipes.router");
var app = (0, express_2.default)();
app.use((0, express_1.json)());
app.use(recipes_router_1.default);
app.get("/health", function (req, res) {
    res.sendStatus(http_status_1.default.OK);
});
var port = parseInt(process.env.PORT) || 5000;
app.listen(port, function () { console.log("Listening"); });
