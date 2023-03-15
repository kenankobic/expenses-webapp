import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { STORAGE_TOKEN } from "../constants/core";
import { ExpenseRoutes } from "../constants/routes";
import { AuthService } from "../services/auth.service";
import { StorageService } from "../services/storage.service";

@Injectable()
export class PublicGuard implements CanActivate {
    constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        if (route.data['isParentRoute'] === true || (route.data['performRedirection'] != null && route.data['performRedirection'] === false))
            this.authService.removeAuth();

        if (this.storageService.getData(STORAGE_TOKEN)) {
            this.router.navigate([ExpenseRoutes.DASHBOARD]);

            return false;
        }

        return true;
    }
}