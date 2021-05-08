import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPattern = '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

  constructor() { }
}
