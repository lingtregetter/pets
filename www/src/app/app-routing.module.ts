import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListPageComponent } from './pages/pets/pet-list-page/pet-list-page.component';

const routes: Routes = [
  { path: 'pets', component: PetListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
