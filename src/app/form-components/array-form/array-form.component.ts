import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})

export class ArrayFormComponent implements OnInit, AfterViewInit {

  stringForm!:FormGroup;

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
