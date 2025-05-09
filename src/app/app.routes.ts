import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'cars', component:CarsComponent, canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'profile', component:ProfileComponent, canActivate:[AuthGuard]},
    {path:'**', redirectTo:'home'},
];
