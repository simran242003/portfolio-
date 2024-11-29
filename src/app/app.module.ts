import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardbuttonsService } from './cardbuttons.service';
import { MaterialModule } from './modules/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { Routes, RouterModule } from '@angular/router';
//import { ProjectDetailsComponent } from './project-details/project-details.component';
import {HttpClientModule} from '@angular/common/http';

// const routes: Routes = [
//   { path: '', component: ProjectsComponent },
//   { path: 'project/:id', component: ProjectDetailsComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ServicesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
   // RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [provideClientHydration(), CardbuttonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
