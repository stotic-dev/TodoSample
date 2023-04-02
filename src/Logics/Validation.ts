export type ValidationConfig = {
    require: boolean
    numberOnly: boolean
}

export class Validation{
    target: string | null;
    isNumberOnly: boolean;
    isReqire: boolean;

    constructor(target: string | null, config: ValidationConfig){
        this.target = target;
        this.isReqire = config.require;
        this.isNumberOnly = config.numberOnly;
    }

    validation(): boolean{
        if(this.isReqire && this.target && this.target.length > 0){
            
            if(this.isNumberOnly){
                return parseFloat(this.target) ? true : false
           }

           return true
        }else if(!this.target || this.target === ""){
            return true
        }

        if(this.isNumberOnly){
            return parseFloat(this.target) ? true : false
       }

        return false
    }
}