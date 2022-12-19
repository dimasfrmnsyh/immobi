const express = require("express");
const cors = require("cors");
const db = require("./configs/config");
const colors = require("colors");
const { errorHandler } = require("./middlewares/error-handler");
const swaggerJSDocs = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));

// parse rq of content-type - application/json
app.use(express.json());

// parse rq of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple router
app.get("/", (req, res) => {
    res.json({ message: "Welcome to test BE Immobi" });
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;

// database sync
db.sync()
    .then(() => {
        console.log("Generate Tables".green);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`.yellow);
        });
    })
    .catch((err) => {
        console.log("Error while accessing databases");
    });

// routes
app.use("/api/", require("./routes/index"));

// global error handler
app.use(errorHandler);
