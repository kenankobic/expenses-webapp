import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { ExpenseRoutes } from 'src/app/core/constants/routes';
import { Expense } from '../models/expense';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses$?: Observable<Expense[]>;

  constructor(private expensesService: ExpensesService, private router: Router) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenses$ = of(this.expensesService.expenses);
    this.expenses$ = this.expensesService.getExpenses();
  }

  viewExpense(id: number): void {
    this.router.navigate([ExpenseRoutes.EXPENSES, id])
  }
}
