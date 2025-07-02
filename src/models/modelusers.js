import { Schema, model} from 'mongoose';
// Importamos mongoose para crear un esquema de usuario poniendo todo lo que necesitamos
const SchemaUsuario = new Schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,
        required: true,
    minlength:[6, 'La contraseña debe tener al menos 6 caracteres'],
    trim:true //elimina espacios de inicio y final
   
},
});
export default  model('user', SchemaUsuario);
//es como llamar la funcion 

