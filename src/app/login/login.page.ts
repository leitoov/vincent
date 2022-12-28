import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../api/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit() {
    this.loginform = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  public submitLogin(): void {
    const validation = this.session.login(
      this.loginform.value.username,
      this.loginform.value.password
    );
    if (validation) {
      this.router.navigate(['/movies']);
    }
  }
}
