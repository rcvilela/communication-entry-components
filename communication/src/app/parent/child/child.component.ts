import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {

  @Input() form: FormGroup;
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
  }

}
