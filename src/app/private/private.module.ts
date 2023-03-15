import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NotesComponent } from './notes/notes.component';
import { ExpenseComponent } from './expenses/expense/expense.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    ExpensesComponent,
    NotesComponent,
    ExpenseComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PrivateModule { }
