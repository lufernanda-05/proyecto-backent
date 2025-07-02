//el controlador depende del modelo de usuario
import bcrypt from 'bcryptjs';// para encriptar la contrasena
import modelusers from "../models/modelusers.js"// para poder controlar el schema de usuarios

const Controllerusers = {
    createUser: async(sol , res)=>{
        try{
            const {name, email, password} = sol.body;
            console.log(sol.body);
            const passwordProtected = await bcrypt.hash(password, 10);
            const newUser = new modelusers({
                name,
                email,
                password: passwordProtected,
            });
            console.log(newUser);

            const userCreate = await newUser.save();
            if(userCreate._id){
                res.json({
                    result: 'fine',
                    message: 'User created',
                    data: userCreate._id,
                });
            }
        }catch(error){
            res.json({
                result: 'mistake',
                message: 'An error occurred while creating the user',
                data: error,
            });
        }
    },
    readUser: async(sol , res)=>{
        try{

            const userFound = await modelusers.findById(
                sol.params.id
            );
            if(userFound._id){
                res.json({
                    result: 'fine',
                    message: 'User found',
                    data: userFound,
                });
            }

        }catch(error){
            res.json({
                result: 'mistake',
                message: 'An error occurred while reading the user',
                data: error,
            });
        }
    },
    readUsers: async (sol, res) => {
        try {
            const allUserFound = await modelusers.find();
            res.json({
                result: 'fine',
                message: 'User found',
                data: allUserFound,
            })

        }catch(error){
            res.json({
                result: 'mistake',
                message: 'An error occurred while reading all users',
                data: error,
            });
        }
    },
    updateUser: async (sol , res)=>{
        try{
            const userUpdate = await modelusers.findByIdAndUpdate(
                sol.params.id,
                sol.body
            );
            if(userUpdate._id){
                res.json({
                    result: 'fine',
                    message: 'User updated',
                    data: userUpdate._id,
                });
            }
        }catch(error){
            res.json({
                result: 'mistake',
                message: 'An error occurred while updating user',
                data: error,
            });
        }
    },
    deleteUser: async (sol , res)=>{
        try{
            const userDelete = await modelusers.findByIdAndDelete(
                sol.params.id
            );
            if(userDelete._id){
                res.json({
                    result: 'fine',
                    message:'User deleted',
                    data: null,
                });
            }

        }catch(error){
            res.json({
                result: 'mistake',
                message: 'An error occurred while deleting user',
                data: error,
            });
        }
    }
};

export default Controllerusers;