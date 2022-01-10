import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form';
import { FormInputs } from '../formInputs';

@Component({
  selector: 'app-string-form',
  templateUrl: './string-form.component.html',
  styleUrls: ['./string-form.component.scss']
})
export class StringFormComponent implements OnInit, Form{
  stringForm!:FormGroup;
  @Input() formName: string="String Form";


  constructor(private fb : FormBuilder) { 

  }
  sendControlsInputs(){    
    return "\""+this.formName+"\":\""+this.stringForm.get('value')?.value+"\"";
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.stringForm = this.fb.group({
      value:['', Validators.required]
    });  
  }

}
