import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'; // we also need angular router for Nebular to function properly
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from '../app/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../app/dynamic-form-question/dynamic-form-question.component';
import { NumberFormComponent } from './form-components/number-form/number-form.component';
import { StringFormComponent } from './form-components/string-form/string-form.component';
import { ArrayFormComponent } from './form-components/array-form/array-form.component';
import { ObjectFormComponent } from './form-components/object-form/object-form.component';
import { AdDirective } from './ad.directive';

const appRoutes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent, 
    DynamicFormQuestionComponent, 
    NumberFormComponent, 
    StringFormComponent, 
    ArrayFormComponent, 
    ObjectFormComponent,
    AdDirective
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
