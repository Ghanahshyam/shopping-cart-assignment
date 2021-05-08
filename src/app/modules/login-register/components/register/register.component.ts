import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'sb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup; 
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, 
    public utilityService:UtilityService, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(this.utilityService.emailPattern)]],
      password: ['',[Validators.required, Validators.pattern(this.utilityService.passwordPattern)]],
      confirmPassword: ['',[Validators.required]],
    }, { validators: this.checkPasswords });

  }

  register() {
    this.submitted = true;
    if(this.registerForm.valid) {
      this.route.navigate(['products']);
    }
  }

  get form() { return this.registerForm.controls; }
  get firstName() { return this.registerForm.get('firstName');}

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    console.log(password, confirmPassword);
    return password === confirmPassword ? null : { notSame: true }     
  }

}
