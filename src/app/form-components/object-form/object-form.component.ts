import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from 'src/app/ad.directive';
import { ArrayFormComponent } from '../array-form/array-form.component';
import { Form } from '../form';
import { FormInputs } from '../formInputs';
import { NumberFormComponent } from '../number-form/number-form.component';
import { StringFormComponent } from '../string-form/string-form.component';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.scss']
})
export class ObjectFormComponent implements OnInit, Form{

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  formName: string="Main";

  typeSelected:number=0;
  fieldName:string="";
  componentRef:ComponentRef<Form>[]=[];

  constructor() { }

  sendControlsInputs() {
    let values = "{\n";

    for(let e of this.componentRef){
      values+= e.instance.sendControlsInputs()+",";
      values = values.slice(0, values.length-1);
      values+="\n";
    }

    return values+"}";
  }
 

 
  ngOnInit(): void {
    console.log(this.formName);
  }

  addForm(){
    let viewContainerRef; 
    console.log(this.typeSelected);


    switch(+this.typeSelected){
      case 0:            
        viewContainerRef = this.adHost.viewContainerRef;    
        this.componentRef.push(viewContainerRef.createComponent<NumberFormComponent>(NumberFormComponent));
        console.log(this.fieldName);
        this.componentRef[this.componentRef.length-1].instance.formName = this.fieldName;
        break;

        case 1:
        viewContainerRef = this.adHost.viewContainerRef;    
        this.componentRef.push(viewContainerRef.createComponent<StringFormComponent>(StringFormComponent));
        this.componentRef[this.componentRef.length-1].instance.formName = this.fieldName;
        break;
        
        case 2:
          viewContainerRef = this.adHost.viewContainerRef;    
          this.componentRef.push(viewContainerRef.createComponent<ArrayFormComponent>(ArrayFormComponent));
          this.componentRef[this.componentRef.length-1].instance.formName = this.fieldName;
          break;

        case 3:
          viewContainerRef = this.adHost.viewContainerRef;    
          this.componentRef.push(viewContainerRef.createComponent<ObjectFormComponent>(ObjectFormComponent));
          this.componentRef[this.componentRef.length-1].instance.formName = this.fieldName;
          break;
    }
    this.fieldName = "";
  }


}
