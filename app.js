const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/empresa'

//Conexion con db
mongoose.connect(url_bd)

//Comprobacion
.then(() => {
    console.log("To bien perro")
})
.catch((err)=>{
    console.log("No funciono")
}) 

//Esquemas db
const empresa = new mongoose.Schema({
    nombre:{
        type:String
    },
    apellidos:{
        type:String
    },
    edad:{
        type:String
    },
    correo:{
        type:String
    },
    telefono:{
        type:String
    },
    estado_civil:{
        type:String
    },
    puesto:{
        type:String
    }

})

//modelo db
const empleados_modelo = new mongoose.model('empleados', empresa)

//Crear tabla
empleados_modelo.create({
    nombre:"Alberto Carlos",
    apellidos:"Perez Silva",
    edad:"34",
    correo:"albcar.persil@gmail.com",
    telefono:"449-876-1572",
    estado_civil:"Soltero",
    puesto:"Gerente de ventas"
})
