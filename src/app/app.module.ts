import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlansComponent } from './plans/plans.component';
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

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
    HomeComponent,
    AdminComponent,
    UserProfileComponent,
    PlansComponent,
    BlogComponent,
    ContactFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes 
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }