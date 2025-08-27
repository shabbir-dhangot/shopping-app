import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { Ui5WebcomponentsIconsModule } from '@ui5/webcomponents-ngx/icons';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import { ShoppingItemsEffects } from './store/effects/shopping-items.effects';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      CommonModule,
      BrowserModule,
      Ui5WebcomponentsModule,
      Ui5WebcomponentsIconsModule.forRoot([
        'sap-icons',
        'tnt-icons',
        'business-suite-icons',
      ]),
      HttpClientModule
    ),
    provideStore(reducers),
    provideStoreDevtools({
      maxAge: 25 // Retains last 25 states
    }),
    provideEffects([ShoppingItemsEffects])
  ]
};
