import multer from 'multer';// maneja la subida de archivos
import modelproducts from '../models/modelproducts.js';
const controllerproducts = {
    createProduct: async (sol, res) => {
        try {
            const alamacenar=multer.diskStorage({
                destination: 'imagenes',
                filename: (req, file, cb) => {
                    cb(null,file.originalname);
                },
            });
const carga= multer({storage:alamacenar}).single('imagen');
carga(sol,res, async (error) => {
    if (error){
        res.json({
            result: 'mistake',
            message: 'Error al cargar la imagen',
            data:null,
        });
    }else{
        const newProduct = new modelproducts({
            color: sol.body.color,
            material: sol.body.material,
            precio: sol.body.precio,
            imagen: sol.file.filename,
        });
        const productscreate = await newProduct.save();
        if (productscreate._id) {
            res.json({
                result: 'fine',
                message: 'Product created',
                data: productscreate._id,
            });
        }
    }
});
        } catch (error) {
            res.json({
                result: 'mistake',
                message: 'An error occurred creating the product',
                data: error,
            });
        }
    },
    readproduct: async (sol, res) => {
         try{
        const productfound = await modelproducts.findById(sol.params.id);
        if (productfound._id) {
            res.json({
                result: 'fine',
                message: 'Product read',
                data: productfound,
            });
        } 
    } catch (error) {
            res.json    ({
                result: 'mistake',
                message: 'error ocurred reading the product',
                data: error,
            });
        }
    },
        readproducts: async (sol, res) => {
            try{
        const allproductsfound = await modelproducts.find();
        res.json ({
            result: 'fine',
            message: 'Products found',
            data: allproductsfound,
        });
    }catch (error) {
        res.json({
            result: 'mistake',
            message: 'An error occurred  reading all product',
            data: error,
        });
    }
},
updateproduct:async(sol, res) => {
    try{
    const productupdate = await modelproducts.findByIdAndUpdate(sol.params.id,sol.body);
    if (productupdate._id){
        res.json({
            result: 'fine',
            message: 'Product updated',
            data: productupdate._id,
        });
    }
} catch (error) {
    res.json({
        result: 'mistake',
        message: 'An error occurred  updating all products',
        data: error,
    });
}
},
deleteproduct: async (sol, res) => {
    try {
        const productdelete = await modelproducts.findByIdAndDelete(sol.params.id);
        if (productdelete) {
            res.json({
                result: 'fine',
                message: 'Product deleted',
                data:null,
            });
        }
    } catch (error) {
        res.json({
            result: 'mistake',
            message: 'An error occurred  deleting all products',
            data: error,
        });
    }
}
};
export default controllerproducts;