import express from "express";
import indexRouter from "./routes/indexRouter.js";
import path from 'node:path'
import sendRouter from "./routes/sendRouter.js";
import { loadEnvFile } from "node:process";

const app = express()
app.set('views', path.join(import.meta.dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(import.meta.dirname, 'public')))
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/send', sendRouter)

const PORT = process.env.PORT || 3000
loadEnvFile()
app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})