function getHello(req, res){
    res.send("Hola mundo desde controllers!");
}

//fichero para cargar las diferentes funciones de nuestra aplicacion

module.exports = {
    getHello,
};