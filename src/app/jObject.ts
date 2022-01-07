import { jArray } from "./jArray";
import { jNumber } from "./jNumber";
import { jString } from "./jString";

export class jObject{
    private key:string="";
    private value:(jObject | jNumber | jString | jArray)[]=[];

    addElement(el : jObject | jNumber | jString | jArray){
        this.value.push(el);
    }
}