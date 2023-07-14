import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  // metodo que usara el boton de registrar y registrará al usuario cuando el formulario sea valido
  public register() {
    console.log(this.myForm.value);

    this.myForm.reset()
  }
}
