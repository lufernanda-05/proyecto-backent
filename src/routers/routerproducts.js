import { Router } from "express";
import controllerproducts from "../controllers/controllerproducts.js";

const routerproducts = Router();
routerproducts.post("/", controllerproducts.createProduct);
routerproducts.get("/:id", controllerproducts.readproduct);
routerproducts.get("/", controllerproducts.readproducts);
routerproducts.put("/:id", controllerproducts.updateproduct);
routerproducts.delete("/:id", controllerproducts.deleteproduct);

export default routerproducts;