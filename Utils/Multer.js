import multer from "multer"
class Multer{
    constructor(){
        this.uploadStorage = multer;
    }

    init (){
        return multer()
    }

}

const _multer = new Multer();
export {_multer} 