const express = require('express');
const session = require('express-session');
const nunjucks = require('nunjucks');
require('dotenv').config();

const sessionManager = require('./modules/sessionManager');

const app = express();
const port = process.env.SERVER_PORT;


app.use(session(sessionManager.sess));
app.use("", express.static("public"));

nunjucks.configure("public/templates", {
    autoescape: false,
    express: app,
    noCache: true
});

// Routing
const base = require('./routers/base.router');
app.use('/', base);
app.use('/rolling',require('./routers/rolling.router'))

// Startup
app.listen(port, () => console.log(`${process.env.SERVER_NAME} running on ${port}!`))