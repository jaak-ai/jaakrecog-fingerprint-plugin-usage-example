/*
 * * JAAK-IT SAPI DE CV - All Rights Reserved
 * * Unauthorized copying of this file, via any medium is strictly prohibited
 * * Proprietary and confidential
 * * Written by root < jesus.serrano@jaak-it.com >, 2021
 * * Support <support@jaak-it.com>
 */
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import * as Sentry from "@sentry/capacitor";
import * as SentryAngular from "@sentry/angular";

Sentry.init(
  {
    dsn: "https://2a3fd8c01f704964b8662683caa54764@o466306.ingest.sentry.io/5997573",

    // To set your release and dist versions
    release: "jaakrecog-fingerprint-usage@<release-name>",
    dist: "<dist>",
  },
  // Forward the init method from @sentry/angular
  SentryAngular.init
);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
    },
    {
      provide: ErrorHandler,
      // Attach the Sentry ErrorHandler
      useValue: SentryAngular.createErrorHandler(),
    },
    ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
