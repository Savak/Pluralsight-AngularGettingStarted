import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

registerLocaleData(localeFr);

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot([
      { path : 'welcome', component : WelcomeComponent },
      { path : '', redirectTo : 'welcome', pathMatch : 'full' },
      { path : '**', redirectTo : 'welcome', pathMatch : 'full' }
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent, 
    WelcomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }
]
})
export class AppModule { }
