import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  handleError(error: unknown) {
    this.zone.run(() => {
      this.snackBar.open(
        'Error was detected! We are already working on it!',
        'Close',
        {
          duration: 2000,
        }
      );
    });
    console.warn('Cought by Custom Error Handler: ', error);
  }
}
