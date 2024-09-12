import { MONGODB_URL } from "../config.js";

class DB {
    constructor (){
        this.URL = MONGODB_URL
        this.instance = null
        console.log(this.URL)
    }

    connect = async ()=>{

    }
}

export default DB
