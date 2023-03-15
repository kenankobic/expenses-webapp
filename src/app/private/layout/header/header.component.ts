import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseRoutes } from 'src/app/core/constants/routes';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ExpenseRoutes = ExpenseRoutes;

  constructor(private authService: AuthService, private router: Router) {

  }

  openMenu() {
    console.log('Open menu')
  }

  logout() {
    this.authService.removeAuth();
    this.router.navigate([ExpenseRoutes.HOME])
  }
}
