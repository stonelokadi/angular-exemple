import { Routes } from "@angular/router";
import { LoginViewComponent } from "./login-view/login-view.component";

export const authRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginViewComponent,
    },
];