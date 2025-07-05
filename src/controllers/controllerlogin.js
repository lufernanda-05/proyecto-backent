//para almacenar las constraseñas de manera seguras
import bcrypt from 'bcryptjs';
//se trae la funcion para generar el token
import { verificarToken,generarToken } from '../ayudas/funciones.js';    
import modelusers from '../models/modelusers.js';

const controllerlogin = {
    iniciarsesion: async(sol,res)=>{
        try{
            const {usuario, password} = sol.body;
            //buscar el usuario en la base de datos y esoerar=await
            const userFound = await modelusers.findOne({email: usuario});

            //*verificar la constraseña
            const constraseñavalidada= await bcrypt.compare(password, userFound.password);
            if(constraseñavalidada){
                //si la constraseña es correcta, generar el token
           
                const token = await generarToken({
                    id: userFound._id,
                    name : userFound.name,
                });
                res.json({
                    result: 'fine',
                    menssage: 'Inicio de sesión exitoso',
                    data:token, 
                    });
                }else{
                    res.json({
                        result: 'mistake',
                        menssage: 'access denied',
                        data: null,
                    });
                }
            }catch(error){
                res.json({
                    result:'mistake',
                    menssage: 'Error al iniciar sesión',
                    data:error,
            });
        }
    },

    validartoken: async (sol, res) => {
        try {
            const token = sol.params.token;
            const decodificado = await verificarToken(token);

        if (decodificado  && decodificado.id){
            res.json({
                result: 'fine',
                menssage: 'Token válido',
                data: decodificado,
            });
        }else{
            res.json({
                result: 'mistake',
                menssage: 'Token inválido',
                data: null,
            });
        }
    }catch(error){
        res.json({
            result: 'mistake',
            menssage: 'Token a expirado',
            data: error,
        });
    }
    }
};
export default controllerlogin;