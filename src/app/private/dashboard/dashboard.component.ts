import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData?: { username?: string, email?: string };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let token = this.authService.getToken();
    this.userData = {
      username: token?.username,
      email: token?.email
    }
  }
}
