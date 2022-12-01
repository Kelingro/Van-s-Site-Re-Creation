import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenLayoutComponent } from './men-layout/men-layout.component';
import { WomenComponent } from './women/women.component';
import { KidComponent } from './kid/kid.component';
import { CustomComponent } from './custom/custom.component';
import { LoginComponent } from './login/login.component';
import { AdditionComponent } from './addition/addition.component';
import { ClassicsComponent } from './classics/classics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mens', component: MenLayoutComponent },
  { path: 'home', component: HomeComponent},
  { path: 'womens', component: WomenComponent },
  { path: 'kids', component: KidComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'login', component: LoginComponent},
  { path: 'add', component: AdditionComponent},
  { path: 'classic', component: ClassicsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
