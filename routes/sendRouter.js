import express, { Router } from "express";
import { getSendPage, postMessage } from "../controllers/sendController.js";

const sendRouter = Router()

sendRouter.get('/', getSendPage)

sendRouter.post('/', postMessage)

export default sendRouter