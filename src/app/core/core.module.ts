import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CognitoService } from './services/cognito.service';

@NgModule({
  imports: [
  ],
  providers: [
    CognitoService
  ]
})
export class CoreModule 
{
  /**
   * Constructor
   */
  constructor(
      @Optional() @SkipSelf() parentModule?: CoreModule
  )
  {
      // Do not allow multiple injections
      if ( parentModule )
      {
          throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
      }
  }
}
