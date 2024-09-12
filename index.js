import { _express } from "./Utils/Express.js";
import { _multer } from "./Utils/Multer.js";
import DbProvider from "./Utils/DbProvider.js";

_express.configJsonBody()
const db = new DbProvider().getdbInstance("mongodb") 

db.connect().then((msg)=>{
    console.log(msg)
    _express.listen()
})