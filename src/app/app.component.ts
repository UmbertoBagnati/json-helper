import { Component } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormField } from './formControl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fieldName:string='';
  fieldType:number=-1;

  formFields:FormField[]=[];

  jsonForm:{name:string,value:number|string}[]=[];
  outputJson:string="";
  objectArray:{name:string,value:number|string}[][]=[];


  get f(){return this.fieldForm.controls}

  fieldForm = this.fb.group({
    fieldName: ['', Validators.required],
    fieldType: ['', Validators.required],
  });


  constructor(private fb: FormBuilder){

  }

  addField(){
    this.formFields.push({name:this.f['fieldName'].value, type:this.f['fieldType'].value});
    
    this.jsonForm.push({name:this.formFields[this.formFields.length-1].name,value:-1});
    this.fieldType=-1;
    this.fieldName="";
    this.fieldForm.reset();
  }



  log(){
    this.outputJson="";
    let i:number = 0;
    let object:{name:string,value:number|string}[]=[];

    for(let f of this.jsonForm){
      object.push({name:f.name,value:f.value});
    }

    this.objectArray.push(object);
    console.log(this.objectArray);

    for(let f of this.objectArray){
      for(let o of f){
        if(this.formFields[i].type==0){
          this.outputJson+=o.name+":"+o.value+',\n';
        }
        else{
          this.outputJson+=o.name+":\""+o.value+'\",\n';
        }
        console.log(this.outputJson);
        
      }
      i++;

    }
    this.outputJson = this.outputJson.slice(0,this.outputJson.length-2);
    
  }


  title = 'json-helper';


}
