import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppLayoutComponent } from './pages/app-layout/app-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: '', component: HomeComponent, title: 'EltonClaus' }],
  },
];
