import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

signinForm: FormGroup;
loggedIn: boolean;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      firstname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  login(): void {
    return this.authService.login();
  }

  logout(): void {
    return this.authService.logout();
  }

  getProfile() {
    return this.authService.getProfile();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signinForm.value);
  }

}
