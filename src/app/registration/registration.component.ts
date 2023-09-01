import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: RegistrationService,
    private torstr: ToastrService
  ) {}

  childrenRegistrationForm = this.builder.group({
    firstName: this.builder.control('', Validators.required),
    middleName: this.builder.control(''),
    lastName: this.builder.control('', Validators.required),
    relationship: this.builder.control('', Validators.required),
    RelationshipPersonsName: this.builder.control('', Validators.required),
    RelationshipPersonsOccupation: this.builder.control('', Validators.required),
    RelationshipPersonsMobileNumber: this.builder.control('', Validators.required),
    email:this.builder.control('', Validators.required),
    dateofbirth:this.builder.control('', Validators.required),
    aadhar:this.builder.control('', Validators.required),
    gender:this.builder.control('', Validators.required),
    address:this.builder.control('', Validators.required),
    branchName:this.builder.control('', Validators.required),
    branchCode:this.builder.control('', Validators.required),
    //photo:this.builder.control('', Validators.required),
    isApproved:this.builder.control(false),
    password: this.builder.control('',[
      Validators.required,
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
    ]),
    confirmPassword: this.builder.control('', [
      Validators.required,
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
    ])
  }, {
    validators: this.passwordMatchValidator // Adding the custom validator
  });

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  proceedregister() {
    if (this.childrenRegistrationForm.valid) {
      if (this.childrenRegistrationForm.hasError('mismatch', 'confirmPassword')) {
        this.childrenRegistrationForm.get('confirmPassword')?.setErrors({ mismatch: true });
        return; 
      }
      this.service.RegisterUser(this.childrenRegistrationForm.value).subscribe(result => {
        this.torstr.success('User Registered Successfully', 'Success');
        this.childrenRegistrationForm.reset();
        //this.router.navigate(['login']);
      });
    } else {
      this.torstr.warning('Please enter valid data');
    }
    console.log(this.childrenRegistrationForm.value);
  }
}