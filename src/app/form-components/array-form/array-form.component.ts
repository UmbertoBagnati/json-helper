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
  formName: string="";

  @ViewChild('selectType') private selectTypeRef!: ElementRef ;


  constructor(private fb : FormBuilder) { 

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.arrayForm = this.fb.group({
      values: this.fb.array([])
    });  
  }

  get aForm(): FormArray{ return this.arrayForm.get('values') as FormArray;}

  get formZ(): FormGroup{ return this.arrayForm as FormGroup;}

  sendControlsInputs(){
    let values = this.formName+":[";
    for(let e of this.aForm.controls){
      values += "\""+e.value+"\",";
    }
    values=values.slice(0,values.length-1);
    return values+"]";
  }


  
  addForm(){
    this.selectionDone = true;
    this.selectTypeRef.nativeElement.remove();
  }
  

  addElementToArray(){
    console.log(this.aForm);

    this.aForm.push(this.fb.control(''));
  }

}
