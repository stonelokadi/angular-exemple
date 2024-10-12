import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable()
export class CognitoService {

  constructor() { }

  public signIn(credentials: {email:string; password:string}): Promise<any> {
    return Auth.signIn(credentials.email, credentials.password).then((res) => res);
  }
}
