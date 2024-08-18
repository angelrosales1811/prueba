import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const permissionsGuard: CanActivateFn = (route, state) => {
  let userAuth = false;
  let router: Router = new Router();

  if (userAuth) {
    return true;
  } else {
    router.navigate(['no-auth']);
    return false;
  }
};
