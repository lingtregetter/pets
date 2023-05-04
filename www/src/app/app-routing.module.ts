import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListPageComponent } from './pages/pets/pet-list-page/pet-list-page.component';
import { PetAddPageComponent } from './pages/pets/pet-add-page/pet-add-page.component';
import { PetEditPageComponent } from './pages/pets/pet-edit-page/pet-edit-page.component';

const routes: Routes = [
  { path: 'pets', component: PetListPageComponent },
  { path: 'pets/add', component: PetAddPageComponent },
  { path: 'pets/edit/:petId', component: PetEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
