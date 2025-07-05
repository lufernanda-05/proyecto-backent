import {match} from 'assert';
import { Schema, model} from 'mongoose';
import { type } from 'os';
// Importamos mongoose para crear un esquema de usuario poniendo todo lo que necesitamos
const SchemaUsuario = new Schema({
    name: {type: String,required: true,trim: true},
    email: {type: String,required: true,match:[/^(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])\S+$/,"email invalid"]},

    password: {type: String,
        required: true,
    minlength:[6, 'La contraseña debe tener al menos 6 caracteres'],
    trim:true, //elimina espacios de inicio y final
   match:[/^(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])\S+$/,"password invalid"]
},
role:{
    type:String,enum:["user","admin"],default:"user",required:false
}
});
export default  model('user', SchemaUsuario);
//es como llamar la funcion 

