import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const employeeGuard: CanActivateFn = (route , state) => {
  const authser : AuthService = inject(AuthService)
  const rout : Router =  inject(Router)
  if(authser.testerAdmin()) return true
  else {
    rout.navigate(['/forbidden'])
  return false}
};
