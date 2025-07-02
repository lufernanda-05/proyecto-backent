import path from "path";//me ayuda a trazar el camino a seguir de los enrutamientos
import express from "express";// realiza la conexion con el servidor 
import morgan from "morgan";//monitorear solicitudes http
import cors from "cors";//permite que el servidor pueda recibir solicitudes de otros dominios
import routerusers from './routers/routerusers.js';

import routerproducts from './routers/routerproducts.js';//importa el router de productos
import routerlogin from './routers/routerlogin.js';//importa el router de login

const servidor = express();//la conexion de la constante servidor
servidor.use(morgan("dev"));//se actualice a cada solicitud http que se realice en el servidor
 servidor.use(cors());//se habilita cors
//ruta de ususario:
servidor.use(express.json());//permite recibir datos en formato json
servidor.use('/usuarios',routerusers);//se conecta con el router de usuarios
servidor.use('/products',routerproducts);//se conecta con el router de productos
servidor.use('/inicio-sesion',routerlogin);//se conecta con el router de login 
servidor.use('/imagenes', express.static(path.resolve('imagenes'))); // ruta para que mis imagenes queden publicas  el valor imagenes viene del controlados el mismo nombre que puse en destination 

servidor.get('/',(sol , res)=>{
    res.status(404).send("No encontrado");
});
export default servidor;