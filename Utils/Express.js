import express from 'express'
import { PORT } from '../config.js';
class Express{
    constructor(){
        this.port = PORT;
        this.app = express()
    }

    listen = () =>{
        try{
            this.app.listen(this.port , () =>{
                console.log(`listing to port ${this.port}`)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    configJsonBody = ()=>{
        this.app.use(express.json())
    }

    getRouter = ()=>{
        return express.Router()
    }

}

const _express = new Express()
export {_express}