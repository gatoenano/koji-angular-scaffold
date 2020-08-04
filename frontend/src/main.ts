// core
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// environment
import { environment } from './environments/environment';
// analytics
import { googleAnalyticsHeadScripts } from './assets/analytics/script.analytics';
// modules
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
  // sets analytics script to the head
  googleAnalyticsHeadScripts();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
