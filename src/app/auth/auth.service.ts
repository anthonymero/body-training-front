import { Injectable } from '@angular/core';
import { AuthOptions, WebAuth } from 'auth0-js';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:variable-name
  protected _auth0Client: WebAuth;
  private _accessToken: string;
  private _idToken: string;
  private _properties: AuthOptions;

  constructor() {

    this._properties = {
      clientID: 'zmDYcd0sUbs4FbDwF3EItwbHPwItqrsp',
      domain: 'dev-oh3t1cwg.auth0.com',
      responseType: 'token id_token',
      audience: 'http://localhost:3000',
      redirectUri: 'http://localhost:4200/login',
      scope: 'openid profile'
    };

    this._auth0Client = new WebAuth({ ...this._properties });
  }

  public login(): void {
    // trigger auth0 authentication page
    this._auth0Client.authorize();
  }

  public checkSession(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._auth0Client.checkSession(this._properties, async (error, authResult) => {
        if (error && error.error !== 'login_required') {
          // some other error
          return reject(error);
        } else if (error) {
          // explicit authentication
          this.handleAuthentication();
          return resolve(false);
        }
        if (!this.isAuthenticated()) {
          this._setSession(authResult);
          return resolve(true);
        }
      });
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return this._accessToken != null;
  }

  private handleAuthentication(): void {
    this._auth0Client.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this._setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  private _setSession(authResult): void {
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
  }

  // check if there is a property Admin in the access token
  public isAdmin(): boolean {
    if (this._accessToken) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(this._accessToken);
      if (decodedToken['http://localhost:3000/roles'].indexOf('admin') > -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public getProfile(): object {
    if (this._idToken) {
      const helper = new JwtHelperService();
      return helper.decodeToken(this._idToken);
    }
  }

  public getAccessToken(): string {
    return this._accessToken;
  }

  public logout(): void {
    // Remove tokens
    delete this._accessToken;
    delete this._idToken;
  }

}
