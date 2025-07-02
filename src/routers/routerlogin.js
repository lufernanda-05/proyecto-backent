import { Router } from 'express';
import controllerlogin from '../controllers/controllerlogin.js';

const routerlogin = Router();

routerlogin.post('/', controllerlogin.iniciarsesion);
//get trae la informacion del token
routerlogin.get('/token/:token', controllerlogin.validartoken);

export default routerlogin;