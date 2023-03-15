import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { STORAGE_TOKEN } from "../constants/core";
import { ExpenseRoutes } from "../constants/routes";
import { StorageService } from "../services/storage.service";

@Injectable()
export class PrivateGuard implements CanActivate {
    constructor(private storageService: StorageService, private router: Router) { }
    canActivate() {
        if (!this.storageService.getData(STORAGE_TOKEN)) {
            this.router.navigate([ExpenseRoutes.HOME]);
            return false;
        }
        return true;
    }
}