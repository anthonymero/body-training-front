import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'body-training-angular-app';

  isConnected;
  userProfile: any;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isloggedIn();
    this.userProfile = this.authService.userProfile;

    // if (!this.isConnected) {
    //   this.authService.login();
    // }
  }

  private isloggedIn(): void {
    this.isConnected = this.authService.isLoggedIn;
  }

}
