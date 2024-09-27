const express = require("express");
const { test, addProduct, addManyProducts, getProducts, getProductById, deleteProduct, editProduct, getProductsByCategory } = require("../controllers/productControllers");
 

const router = express.Router();

router.get("/test", test);
router.post('/addProduct', addProduct);
router.post('/addManyProducts', addManyProducts)
router.get('/getProducts', getProducts)
router.get('/getProductById/:id', getProductById)
router.get('/getProductsByCategory/:category', getProductsByCategory);
router.delete('/deleteProduct/:id', deleteProduct)
router.put('/editProduct/:id', editProduct)

module.exports = router;
