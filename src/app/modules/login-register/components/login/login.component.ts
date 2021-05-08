import { UtilityService } from './../../../../services/utility/utility.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'sb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPattern = '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

  constructor(private route: ActivatedRoute, private router: Router, public utilityService:UtilityService) { }

  ngOnInit(): void {
    // this.route.data.subscribe((data:Data) => {
    //   console.log('data...',data);
    // })
  }

  loginFormSubmit({valid, value}: NgForm) {
    const formData =  new FormData();
    formData.append('email', value?.email)
    formData.append('password', value?.password);
    console.log('formData', formData);
    this.router.navigate(['products']);
  }

}
