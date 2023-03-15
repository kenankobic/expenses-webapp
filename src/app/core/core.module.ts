import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';
import { AlertService } from './services/alert.service';
import { PublicGuard } from './guards/public.guard';
import { PrivateGuard } from './guards/private.guard';



@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    // Services
    AuthService,
    StorageService,
    RequestService,
    AlertService,
    // Guards
    PublicGuard,
    PrivateGuard,
  ],
})
export class CoreModule {
  // Added translator service to constructor so it will get initialized and it will set the language for the whole app
  constructor() { }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    };
  }
}
