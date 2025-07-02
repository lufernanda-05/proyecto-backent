import mongoose from "mongoose";
mongoose.connect(process.env.mongodb)
    .then((dato) => {
        console.log(" se ha conectado a la base de datos");
    }) .catch((error) => {
        console.log("no se ha conectado a la base de datos");
    });