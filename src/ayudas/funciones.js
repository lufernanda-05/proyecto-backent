//funcion para loguearse
import jwt from 'jsonwebtoken';
export function generarToken(payload) {
    return new Promise((resolver,rechazar)=> {
        //para crear un tiempo determinado entre una sesion: jwt
        jwt.sign(payload,'llave secreta',{
            expiresIn :'30s' //30 segundos expira 
        },(error,token)=>{
            if(error) {
             rechazar(error);
            }else{
             resolver(token);
            }
        });
    });
}
export function verificarToken(token) {
    return new Promise((resolver,rechazar)=> {
        jwt.verify(token,'llave secreta',(error,decodificado)=>{
            if(error) {
                rechazar(error);
            }else{
                resolver(decodificado);
            }
        });
    });
}