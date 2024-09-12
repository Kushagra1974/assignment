import mongoose from "mongoose";
import DB from "./DB.js";
class Mongoose extends DB {
    constructor(){
        super()
        this.instance = mongoose
    }

    connect = async () =>{
        try{
            this.instance.connect(this.URL)
            return "connected to mongodb"
        }
        catch (err){
            console.log("mongodb error" , err)
        }
    } 
}

export default Mongoose