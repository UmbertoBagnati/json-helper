import { Component, OnInit, AfterViewInit, ComponentRef, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form';
import { NumberFormComponent } from '../number-form/number-form.component';
import { ObjectFormComponent } from '../object-form/object-form.component';
import { StringFormComponent } from '../string-form/string-form.component';
import { AdDirective } from 'src/app/ad.directive';
import { FormInputs } from '../formInputs';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})

export class ArrayFormComponent implements OnInit, AfterViewInit, Form {

  arrayForm!:FormGroup;
  typeSelected:number=0;
  componentRef:ComponentRef<any>[]=[];
  selectionDone:boolean=false;

  @ViewChild('selectType') private selectTypeRef!: ElementRef ;


  constructor(private fb : FormBuilder) { 

  }

  sendControlsInputs(){
    let values = "[";
    for(let e of this.aForm.controls){
      values += "\""+e.value+"\",";
    }
    return values;
  }


  formName: string="";

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.arrayForm = this.fb.group({
      values: this.fb.array([])
    });  
  }

  get aForm(): FormArray{ return this.arrayForm.get('values') as FormArray;}

  get formZ(): FormGroup{ return this.arrayForm as FormGroup;}

  
  addForm(){
    /*
    let viewContainerRef; 
    console.log(this.typeSelected);    

    switch(+this.typeSelected){
      case 0:            
        viewContainerRef = this.adHost.viewContainerRef;    
        this.componentRef.push(viewContainerRef.createComponent<NumberFormComponent>(NumberFormComponent));
        break;

        case 1:
        viewContainerRef = this.adHost.viewContainerRef;    
        this.componentRef.push(viewContainerRef.createComponent<StringFormComponent>(StringFormComponent));
        break;
        
        case 2:
          viewContainerRef = this.adHost.viewContainerRef;    
          this.componentRef.push(viewContainerRef.createComponent<ArrayFormComponent>(ArrayFormComponent));
          break;

        case 3:
          viewContainerRef = this.adHost.viewContainerRef;    
          this.componentRef.push(viewContainerRef.createComponent<ObjectFormComponent>(ObjectFormComponent));
          break;
    }*/
    this.selectionDone = true;
    this.selectTypeRef.nativeElement.remove();
  }
  

  addElementToArray(){
    console.log(this.aForm);

    this.aForm.push(this.fb.control(''));
  }

}
