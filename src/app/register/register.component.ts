import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

// tslint:disable-next-line:typedef
function MustMatch(controlName: string,
                   matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.mustMatch){
      return;
    }
    if (control.value !== matchingControl.value){
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.registerForm.controls;
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid){
      return;
    }
    alert('Success! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
  onReset(): void{
    this.submitted = false;
    this.registerForm.reset();
  }
}
