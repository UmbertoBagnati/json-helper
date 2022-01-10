import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form';
import { FormInputs } from '../formInputs';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.scss']
})
export class NumberFormComponent implements OnInit, AfterViewInit, Form {

  numberForm!:FormGroup;
  @Input() formName: string="Number Form";


  constructor(private fb : FormBuilder) { 

  }
  sendControlsInputs(){
    return "\""+this.formName+"\":"+this.numberForm.get('value')?.value;
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.numberForm = this.fb.group({
      value:['', Validators.required]
    });  
  }

}
