import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit, Output, ComponentRef, ElementRef } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { QuestionService } from './question.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';
import { AdDirective } from './ad.directive';
import { NumberFormComponent } from './form-components/number-form/number-form.component';
import { StringFormComponent } from './form-components/string-form/string-form.component';
import { ObjectFormComponent } from './form-components/object-form/object-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[QuestionService]
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('objectForm') elReF!:ObjectFormComponent;

  questions$: Observable<QuestionBase<any>[]>;
  jsonString:string="\n";




  constructor(service: QuestionService, private fb : FormBuilder) {
    this.questions$ = service.getFieldType();
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  getInputs(){
    console.log(this.elReF.sendControlsInputs());

    this.jsonString+=this.elReF.sendControlsInputs()+",\n";
  }


  title = 'json-helper';


}
