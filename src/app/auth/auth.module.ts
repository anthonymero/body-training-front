import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { CallbackComponent } from './call-back/call-back.component';

@NgModule({
    declarations: [SignInComponent, CallbackComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [AuthService],
    exports: [SignInComponent]

})
export class AuthModule { }
