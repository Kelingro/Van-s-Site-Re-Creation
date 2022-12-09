import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavCompComponent } from './navComp/nav-comp/nav-comp.component';
import { NavComp2Component } from './navComp2/nav-comp2/nav-comp2.component';
import { NavComp3Component } from './navComp3/nav-comp3/nav-comp3.component';
import { NavDropComponent } from './nav-drop/nav-drop.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NevermindComponent } from './nevermind/nevermind.component';
import { IgnoreComponent } from './ignore/ignore.component';
import { NoComponent } from './no/no.component';
import { DogComponent } from './dog/dog.component';
import { BigCardComponent } from './big-card/big-card.component';
import { DataBoundShoeComponent } from './data-bound-shoe/data-bound-shoe.component';
import { CardListComponent } from './card-list/card-list.component';
import { MenLayoutComponent } from './men-layout/men-layout.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { KidComponent } from './kid/kid.component';
import { CustomComponent } from './custom/custom.component';
import { StickyNavComponent } from './sticky-nav/sticky-nav.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { PinkcardComponent } from './pinkcard/pinkcard.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AdditionComponent } from './addition/addition.component';
import { FormsModule } from '@angular/forms';
import { ClassicsComponent } from './classics/classics.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavCompComponent,
    NavComp2Component,
    NavComp3Component,
    NavDropComponent,
    SearchFormComponent,
    NevermindComponent,
    IgnoreComponent,
    NoComponent,
    DogComponent,
    BigCardComponent,
    DataBoundShoeComponent,
    CardListComponent,
    MenLayoutComponent,
    HomeComponent,
    WomenComponent,
    KidComponent,
    CustomComponent,
    StickyNavComponent,
    CardCarouselComponent,
    PinkcardComponent,
    MyInfoComponent,
    LoginComponent,
    AdditionComponent,
    ClassicsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
