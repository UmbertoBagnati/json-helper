import { Component } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormField } from './formControl';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fieldName:string='';
  fieldType:number=-1;

  formFields:FormField[]=[];

  questions$: Observable<QuestionBase<any>[]>;



  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  title = 'json-helper';


}
