const mongoClient = require('mongodb').MongoClient;
const uriDatabase = "mongodb+srv://admin:1234567890@cluster0-dwie7.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoClient(uriDatabase, { useNewUrlParser: true, useUnifiedTopology: true });

const inventor = {
    first: "Matias",
    last: "Perez",
    year: 4567
}

client.connect()
    .then (function connectDB(){
        return new Promise (resolve =>{
            console.log("Conexion exitosa");
            let collectionInventors = client.db('betp2_desafio').collection('inventors');
            resolve("Llego")
        })
    })
    .then(function insertInventor(){
        return new Promise (async resolve =>{
            let collectionInventors = client.db('betp2_desafio').collection('inventors');
            await collectionInventors.insertOne(inventor);
            console.log("Inventor insertado");
            resolve("Llego");
        })
    })
    .then (function findInventor(){
        return new Promise (async function (resolve,reject) {
            let collectionInventors = client.db('betp2_desafio').collection('inventors');
            let user = await collectionInventors.findOne({last:"Kepler"});
            console.log("Inventor encontrado:", user);
            if(user){
                resolve("Llego");            
            }else{
                reject("No se encontro al inventor indicado");
            }
        })
    })
    .then(function updateInventor(){
        return new Promise (async resolve =>{
            let collectionInventors = client.db('betp2_desafio').collection('inventors');
            await collectionInventors.updateOne({first: "Gustavo"},{$set: {first: "Gonzalo"}});
            console.log("Inventor modificado");
            resolve("Llego");
        })
    })
    .then(function deleteInventor(){
        return new Promise (async resolve=>{
            let collectionInventors = client.db('betp2_desafio').collection('inventors');
            await collectionInventors.deleteOne({first: "Gonzalo"});
            console.log("Inventor Eliminado");
            client.close();
            console.log("Se cerro la conexion con la BD");
            console.log("No hubo errores en la ejecución del CRUD");
        })
    })
    .catch(error=>{
        console.log("ERROR: ", error);
        console.log("BD Desconectada");
        client.close();
    })