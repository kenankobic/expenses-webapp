import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endpoint } from 'src/app/core/constants/endpoints';
import { RequestService } from 'src/app/core/services/request.service';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expenses: Expense[] = [];

  constructor(private requestService: RequestService) { }

  getExpenses(): Observable<Expense[]> {
    return this.requestService.get<Expense[]>(Endpoint.EXPENSES).pipe(map((expenses: Expense[]) => this.expenses = expenses));
  }

  getExpenseById(id: number): Observable<Expense> {
    // this.expenses.find((expense: Expense) => expense.id === id);
    return this.requestService.get<Expense>(`${Endpoint.EXPENSES}/${id}`);
  }
}
