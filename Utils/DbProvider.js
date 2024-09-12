import Mongoose from "./Mongoose.js";



class DbProvider {
    constructor(){
        this.instance = null; 
    }

    getdbInstance (dbType){
        switch (dbType){
            case "mongodb":{
                if(this.instance == null)
                this.instance = new Mongoose()
                else return this.instance
            }
        }
    }

}

const dbProvider = new DbProvider ()

class DBInstance {
    getDbInstance = () => {
        
    }
}



export default DbInstance