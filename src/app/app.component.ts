import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit, Output, ComponentRef } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { QuestionService } from './question.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';
import { AdDirective } from './ad.directive';
import { NumberFormComponent } from './form-components/number-form/number-form.component';
import { StringFormComponent } from './form-components/string-form/string-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[QuestionService]
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  

  questions$: Observable<QuestionBase<any>[]>;

  typeSelected!:number;
  fieldName:string="";
  componentRef:ComponentRef<any>[]=[];

  constructor(service: QuestionService, private fb : FormBuilder) {
    this.questions$ = service.getFieldType();
  }
  ngOnInit(): void {
    console.log(this.adHost);
  }

  ngAfterViewInit(): void {

  }

  loadComponent(type:number) {
    switch(type){

    }    
    
  }

  addForm(){
    let viewContainerRef; 
    console.log(this.typeSelected);


    switch(+this.typeSelected){
      case 0:            
        viewContainerRef = this.adHost.viewContainerRef;    
        this.componentRef.push(viewContainerRef.createComponent<NumberFormComponent>(NumberFormComponent));
        console.log(this.fieldName);
        this.componentRef[this.componentRef.length-1].instance.name = this.fieldName;
        break;

        case 1:
        viewContainerRef = this.adHost.viewContainerRef;    
        this.componentRef.push(viewContainerRef.createComponent<StringFormComponent>(StringFormComponent));
        this.componentRef[this.componentRef.length-1].instance.name = this.fieldName;
        break;        
    }
  }

  title = 'json-helper';


}
