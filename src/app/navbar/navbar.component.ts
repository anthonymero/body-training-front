import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isConnected = true;

  @Output()
  toggleSideNav: EventEmitter<void> = new EventEmitter<void>();


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

  onToggleSideNavMenu(): void {
    this.toggleSideNav.emit();
  }

  private isUserConnected(): boolean {
    return this.authService.isAuthenticated();
  }

}
