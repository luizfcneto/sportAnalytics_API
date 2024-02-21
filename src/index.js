import express, { json } from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import routes from "./routes/index.js";
import swaggerDocument from "../swagger-output.json" assert {type: 'json'};

dotenv.config();

const app = express();

app.use(routes);
app.use(express.json());

// Configurando end-point da documentação gerada pelo swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

try {
    app.listen(process.env.APPLICATION_PORT, () => {
        console.log("Application is UP running on PORT:", process.env.APPLICATION_PORT);
    });
}catch(error) {
    console.error(error.name, error.message);
}
