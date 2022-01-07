import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getStringQuestions() {
    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'fieldType',
        label: 'Type',
        options: [
          {key: 'number',  value: 'Number'},
          {key: 'string',  value: 'String'},
          {key: 'array',   value: 'Array'},
          {key: 'object', value: 'object'}
        ],
        required:true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'fieldName',
        label: 'Field Name',
        value: '',
        required: true,
        order: 1
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
/*
  getNumberQuestions() {
    const questions: QuestionBase<number>[] = [

      new DropdownQuestion({
        key: 'fieldType',
        label: 'Type',
        options: [
          {key: 'number',  value: 'Number'},
          {key: 'string',  value: 'String'},
          {key: 'array',   value: 'Array'},
          {key: 'object', value: 'object'}
        ],
        required:true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'fieldName',
        label: 'Field Name',
        value: '',
        required: true,
        order: 1
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
  */

}