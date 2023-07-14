import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  // solo dejaremos pasar a los usuarios que esten autenticados
  if (authService.authStatus() === AuthStatus.auntenticated)
    return true;

  const url = state.url;
  localStorage.setItem('path', url);

  router.navigateByUrl('/auth/login')
  return false;
};
