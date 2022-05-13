const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;
const urlMongoAtlas ="mongodb+srv://admin:admin123456@manueldb.fdft9.mongodb.net/manueldb?retryWrites=true&w=majority";
//Fichero para levantar el servidor
mongoose.connect(urlMongoAtlas,(err,res)=>{
    try{
        if(err){
            throw error;
        } else{
            console.log("La conexion a la BD es correcta");

            app.listen(port, () => { 
                console.log("Servidor del API REST esta funcionando en http://localhost:3000");
            })
        }
    } catch(error){
        console.error(error);
    }
});




