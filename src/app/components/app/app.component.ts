import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {UserInterface} from '../../interfaces/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;
  type: string;
  user: UserInterface;
  mySelect: any;
  // car = {
  //   id:12,
  //   brand:'BMW',
  //   color: 'red',
  //   aderess: {
  //     city: {
  //       name:'Lvov',
  //       str: 'Promuslova',
  //       n: 123
  //     }
  //   }
  // }
  // let n = car.aderess.city.n
  // let {aderess:{city:{name}},color,brand,id} = car

  // constructor(private formBuilder: FormBuilder) {
  //   // this.form = new FormGroup({
  //   //   email: this.email,
  //   //   password: new FormControl( '', [Validators.required, Validators.minLength(5)]),
  //   //   confirm: new FormControl('', [Validators.required])
  //   // }, this.passwordValidator.bind(this));
  //   this.form = formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     confirm: ['', Validators.required]
  //   });
  // }
  //
  // save(form: FormGroup): void {
  //
  //   this.user = form.getRawValue();
  //   console.log(this.user.email);
  //   console.log(this.user.password);
  //   console.log(this.user);
  //   console.log(form);
  // }
  //
  // passwordValidator(form: FormGroup): null | object {
  //   const password = form.controls.value;
  //   const {value: confirm} = form.controls.confirm;
  //   return password === confirm ? null : {passwordError: true};
  //
  // }


  constructor(private router: Router) {
    this.form = new FormGroup({
      myselector: new FormControl('', [Validators.required]),
       myInput: new FormControl('', [Validators.required])
    });
  }
  show({controls: {myselector: {value}}}: FormGroup ): void {

    // if (value === 'users') {
    //   console.log('test');
    //   this.router.navigate(['users']);
    // } else if (value === 'posts') {
    //   this.router.navigate(['posts']);
    // }
    console.log(value);
    this.router.navigate([value]);
  }

  myChange(event: Event): void {
    console.log('event.target');
    console.log(event.target);
  }
}
