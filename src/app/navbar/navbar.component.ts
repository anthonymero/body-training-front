import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isConnected = true;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    // this.isConnected = this.isUserConnected();
  }

  onLogout(): void {
    console.log('logout');
    this.authService.logout();
  }

  onViewProfile(): void {
    console.log('MyProfile');
    // TODO set route /profile
    this.router.navigate(['profile']);
  }

  private isUserConnected(): boolean {
    return this.authService.isAuthenticated();
  }

}
