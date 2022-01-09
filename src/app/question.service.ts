import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getFieldType() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'fieldType',
        label: 'Field Type',
        options: [
          {key: '0',  value: 'numebr'},
          {key: '1',  value: 'string'},
          {key: '2',   value: 'array'},
          {key: '3', value: 'object'}
        ],
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}