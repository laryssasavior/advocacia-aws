import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { ContatoComponent } from './components/contato/contato.component';
import { BaseComponent } from './base/base.component';
import { LoaderComponent } from './loader/loader.component';
import { MeetingComponent } from './meeting/meeting.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'base', component: BaseComponent },
    { path: 'home', component: HomeComponent },
    { path: 'loader', component: LoaderComponent },
    { path: 'meeting', component: MeetingComponent },
    {path: 'dashboard', component: DashboardComponent}

];