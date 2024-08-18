
import {  HttpInterceptorFn } from '@angular/common/http';
import { inject} from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next,) => {
  const loadingService = inject(SpinnerService);
  loadingService.show();
  return next(req).pipe(finalize(() => loadingService.hide()));
  };