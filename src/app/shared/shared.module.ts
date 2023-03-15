import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DateTimePipe } from './pipes/date-time.pipe';
import { MaterialModule } from './material/material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ToastrModule } from 'ngx-toastr';


const pipes = [
  SafeHtmlPipe,
  DateTimePipe,
];
const components = [
  CarouselComponent,
]

@NgModule({
  declarations: [
    ...pipes,
    ...components,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ...pipes,
    ...components,
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
