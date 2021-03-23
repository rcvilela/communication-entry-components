import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public output: any;

  public form: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('ABC', Validators.required),
      password: new FormControl('12345', Validators.required),
      address: new FormControl('Av. Brasil, 158', Validators.required),
      city: new FormControl('Belo Horizonte', Validators.required)
    });
  }

  getForm(e) {
    this.output = this.fb.group(e);
  }
}
