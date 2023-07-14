import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

const comprobarEmail: string = '/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i'

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent {

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group(
    {
      email: ['pablo@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });


  public login() {
    const { email, password } = this.myForm.value

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }
}
