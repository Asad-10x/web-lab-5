import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgottenpassComponent} from './forgottenpass/forgottenpass.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrowserModule, FormsModule ,LoginComponent, SignupComponent, ForgottenpassComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clean-ang-proj';
}
