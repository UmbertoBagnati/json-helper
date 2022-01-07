import { jNumber } from "./jNumber";
import { jObject } from "./jObject";
import { jString } from "./jString";

export class jArray{
    private key:string="";
    private values:(jString | jNumber | jObject | jArray)[] =[];

    constructor(key:string){
        this.key = key;
    }

    addElement(el: jString | jNumber | jObject | jArray){
        this.values.push(el);
    }
}