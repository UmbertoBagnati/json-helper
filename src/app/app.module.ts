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
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
const appRoutes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
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
