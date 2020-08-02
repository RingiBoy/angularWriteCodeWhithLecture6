import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {IUser} from '../../interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;
  // email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  user: IUser;

  constructor(private formBuilder: FormBuilder) {
    // this.form = new FormGroup({
    //   email: this.email,
    //   password: new FormControl( '', [Validators.required, Validators.minLength(5)]),
    //   confirm: new FormControl('', [Validators.required])
    // }, this.passwordValidator.bind(this));
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  save(form: FormGroup): void {

    this.user = form.getRawValue();
    console.log(this.user.email);
    console.log(this.user.password);
    console.log(this.user);
    console.log(form);
  }

  passwordValidator(form: FormGroup): null | object {
    const password = form.controls.value;
    const {value: confirm} = form.controls.confirm;
    return password === confirm ? null : {passwordError: true};

  }

}
