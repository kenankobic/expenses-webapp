import { Routes } from "@angular/router";
import { PublicGuard } from "../core/guards/public.guard";
import { LoginComponent } from "./login/login.component";

export const PublicRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [PublicGuard],
        data: { performRedirection: false, isParentRoute: true }
    },
]