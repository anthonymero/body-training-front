import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [],
    exports: [SignInComponent]

})
export class AuthModule { }
