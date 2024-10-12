import { Auth } from "aws-amplify";


export class CognitoService {

  constructor() { }

  public signIn(credentials: {email:string; password:string}): Promise<any> {
    return Auth.signIn(credentials.email, credentials.password).then((res) => res);
  }
}
