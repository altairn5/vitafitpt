import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlansComponent } from './plans/plans.component';
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientService } from './http-client-service/http-client.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', component: HomeComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BlogComponent,
    CarouselComponent,
    ContactFormComponent,
    HomeComponent,
    NavbarComponent,
    PlansComponent,
    UserProfileComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    RouterModule.forRoot(
      appRoutes 
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
