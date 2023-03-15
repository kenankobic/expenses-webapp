import { Routes } from "@angular/router";
import { ExpenseRoutes } from "../core/constants/routes";
import { PrivateGuard } from "../core/guards/private.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ExpenseComponent } from "./expenses/expense/expense.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotesComponent } from "./notes/notes.component";

export const PrivateRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [PrivateGuard],
        children: [
            {
                path: ExpenseRoutes.DASHBOARD,
                component: DashboardComponent,
                canActivate: [PrivateGuard]
            },
            {
                path: ExpenseRoutes.EXPENSES,
                component: ExpensesComponent,
                canActivate: [PrivateGuard]
            },
            {
                path: `${ExpenseRoutes.EXPENSES}/:id`,
                component: ExpenseComponent,
                canActivate: [PrivateGuard]
            },
            {
                path: ExpenseRoutes.NOTES,
                component: NotesComponent,
                canActivate: [PrivateGuard]
            },
        ]
    },
]