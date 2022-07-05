import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validationRegex } from '@constants';
import { ToastService } from 'angular-toastify';
import { BehaviorSubject, takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  alive = true;
  isFormSubmitted = false;

  loading$ = new BehaviorSubject(false);

  constructor(private api: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toaster: ToastService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(validationRegex.email)]],
      password: ['', [Validators.required, Validators.pattern(validationRegex.password)]]
    })
    console.log(this.form)
  }

  ngOnInit(): void {
  }

  login() {
    this.isFormSubmitted = true;
    if(!this.form.valid){
      return 
    }
    this.loading$.next(true);
    this.api.login(this.form.value).pipe(takeWhile(_ => this.alive)).subscribe((res: any) => {
      console.log(res);
      this.loading$.next(false);
      if(res?.status){
        this.authService.setLoginData();
        this.toaster.success(res.message);
        this.router.navigate(['dashboard'])
      }else{
        this.toaster.error(res.message);
      }
    }, (err) => {
      console.log(err);
      this.loading$.next(false);
      this.toaster.error("Something went wrong!");
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
