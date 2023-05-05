import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { PetAddPageComponent } from './pages/pets/pet-add-page/pet-add-page.component';
import { PetListPageComponent } from './pages/pets/pet-list-page/pet-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PetEditPageComponent } from './pages/pets/pet-edit-page/pet-edit-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageContainerComponent,
    PetAddPageComponent,
    PetListPageComponent,
    PetEditPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
