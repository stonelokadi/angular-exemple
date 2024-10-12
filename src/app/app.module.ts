import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { Amplify } from 'aws-amplify';
import { environment } from 'src/environments/environment.dev';

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

Amplify.configure(
  {
    Auth: {
      region: environment.COGNITO_REGION,
      userPoolId: environment.COGNITO_USER_POOL_ID,
      userPoolWebClientId: environment.COGNITO_USER_POOL_WEB_CLIENT_ID
    }
  }
);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, routerConfig),
    CoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
