import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.scss']
})
export class NumberFormComponent implements OnInit, AfterViewInit, Form {

  numberForm!:FormGroup;
  @Input() name: string="Number Form";


  constructor(private fb : FormBuilder) { 

  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.numberForm = this.fb.group({
      name:['', Validators.required],
      value:['', Validators.required]
    });  
  }

}
