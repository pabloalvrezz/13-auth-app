import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

const comprobarEmail: string = '/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i'

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService)

  public myForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });


  public login() {
    const { email, password } = this.myForm.value

    this.authService.login(email, password)
      .subscribe({
        next: () => console.log('Todo correcto'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }
}
