import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListPageComponent } from './pages/pets/pet-list-page/pet-list-page.component';
import { PetAddPageComponent } from './pages/pets/pet-add-page/pet-add-page.component';
import { PetEditPageComponent } from './pages/pets/pet-edit-page/pet-edit-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { IsAuthenticatedGuardService } from './auth/is-authenticated-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'pets',
    component: PetListPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'pets/add',
    component: PetAddPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'pets/edit/:petId',
    component: PetEditPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [IsAuthenticatedGuardService],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
