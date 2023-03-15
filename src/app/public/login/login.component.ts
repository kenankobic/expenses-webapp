import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseRoutes } from 'src/app/core/constants/routes';
import { AuthService } from 'src/app/core/services/auth.service';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInOutAnimation]
})
export class LoginComponent {
  errorMessage?: string;

  loginForm: UntypedFormGroup = this.formBuilder.group({
    'username': [''],
    'password': ['']
  });
  hidePassword: boolean = true;
  ExpenseRoutes = ExpenseRoutes;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }


  login(): void {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        complete: () => this.router.navigate([this.ExpenseRoutes.DASHBOARD]),
        error: (error: any) => {
          console.log(error);
          this.displayErrorMessage(error?.error?.error_description);
        }
      })
  }

  displayErrorMessage(error?: string) {
    this.errorMessage = error;
  }
}
