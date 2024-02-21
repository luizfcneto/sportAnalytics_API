import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.use("/api", routes);
app.use(express.json());


try {
    app.listen(process.env.APPLICATION_PORT, () => {
        console.log("Application is UP running on PORT:", process.env.APPLICATION_PORT);
    });
}catch(error) {
    console.error(error.name, error.message);
}
