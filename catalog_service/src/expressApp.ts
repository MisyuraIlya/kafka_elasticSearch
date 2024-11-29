import express from "express";
import catalogROuter from './controller/catalog.routes'

const app = express()
app.use(express.json());
app.use('/', catalogROuter)

export default app