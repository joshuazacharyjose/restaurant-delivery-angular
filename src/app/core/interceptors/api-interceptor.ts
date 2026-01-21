import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  const loadingServiceInstance = inject(LoadingService); // Duplicate for safety if name clash

  loadingServiceInstance.show();

  return next(req).pipe(
    delay(800), // Simulate network delay
    finalize(() => loadingServiceInstance.hide())
  );
};
