import { Schema,model } from "mongoose";
//producto para salas
const esquemaProducto = new Schema({
    color: {type: String,required: true},
    material: {type: String,required: true},
    precio: {type: Number,required: true},
    imagen: {type: String,required: true},
},
{versionKey: false,
timestamps: true,
});
// Exportamos el modelo de producto
// El nombre del modelo es Producto y el esquema es esquemaProducto
export default model('Producto', esquemaProducto);

