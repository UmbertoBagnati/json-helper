import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form';

@Component({
  selector: 'app-string-form',
  templateUrl: './string-form.component.html',
  styleUrls: ['./string-form.component.scss']
})
export class StringFormComponent implements OnInit, Form{
  stringForm!:FormGroup;
  @Input() name: string="String Form";


  constructor(private fb : FormBuilder) { 

  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.stringForm = this.fb.group({
      name:['', Validators.required],
      value:['', Validators.required]
    });  
  }

}
