export class FormInputs{
    name!:string;
    type!:number;
    value!:number|string[];

    constructor(name:string, type:number, value:number|string[]){
        this.name = name;
        this.type = type;
        this.value = value;
    }
    
}