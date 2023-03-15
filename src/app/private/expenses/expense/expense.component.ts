import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Expense } from '../../models/expense';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  id?: number;
  data?: Expense;
  
  constructor(private activatedRoute: ActivatedRoute, private expensesService: ExpensesService) {
    activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
    })
  }

  ngOnInit(): void {
    // this.expensesService.getExpenseById()
  }
}
