import express, { Router } from "express";
import { connectDB } from '../db/Connect';
import * as Controller from '../controllers/apiController'
const router = Router();


router.get('/', connectDB, Controller.all)
router.post('/add', express.urlencoded({extended:true}), Controller.add)
router.put('/update/:id', express.urlencoded({extended:true}), Controller.update)
router.delete('/delete/:id', express.urlencoded({extended:true}), Controller.Delete)

export default router;