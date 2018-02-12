import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { appRouter } from './app.routing';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { CommonHeaderComponent } from './layouts/common-layout/common-header/common-header.component';
import { CommonFooterComponent } from './layouts/common-layout/common-footer/common-footer.component';
import { PrintLayoutComponent } from './layouts/print-layout/print-layout.component';
import { PrintFooterComponent } from './layouts/print-layout/print-footer/print-footer.component';
import { PrintHeaderComponent } from './layouts/print-layout/print-header/print-header.component';
import { AuthGuardService } from './backend/shared/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    CommonHeaderComponent,
    CommonFooterComponent, 
    PrintLayoutComponent,
    PrintFooterComponent,
    PrintHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRouter,
      //{ enableTracing: true }
    ),
    Ng4LoadingSpinnerModule
  ],
  providers: [
    CookieService,
    AuthGuardService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
