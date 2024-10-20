import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  username: string= '';
  password: string= '';

  onSubmit(form: any): void {
    if (form.valid) {
      console.log(form.value)
      console.log("Form Submitted successfully!");
    }
  }
}
