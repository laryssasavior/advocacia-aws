import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { ContatoComponent } from './_pages/contato/contato.component';
import { MeetingComponent } from './_pages/meeting/meeting.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { RegisterComponent } from './_pages/register/register.component';
import { ClientComponent } from './_pages/client/client.component';
import { DashboardAuthGuard } from './autenticacao/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent}, // Rota raiz
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'meeting', component: MeetingComponent},  
    { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardAuthGuard]},
    { path: 'register', component: RegisterComponent },
    { path: 'client', component: ClientComponent},
]