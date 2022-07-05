import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    if(localStorage.getItem('isLoggedIn')){
      return true;
    }
    
    return false;
  }

  setLoginData(){
    localStorage.setItem('isLoggedIn','true');
  }
}
