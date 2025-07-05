import {Router} from 'express';
import controllerusers, { forgotpasword } from '../controllers/controllerusers.js';

const routerusers = Router();

routerusers.post('/',controllerusers.createUser);
routerusers.get('/:id', controllerusers.readUser);
routerusers.get('/',controllerusers.readUsers);
routerusers.put('/:id',controllerusers.updateUser);
routerusers.delete('/:id', controllerusers.deleteUser);
routerusers.post('/forgot-password',forgotpasword);
export default routerusers;