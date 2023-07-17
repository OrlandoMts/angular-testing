import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginForm {
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
