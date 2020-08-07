import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import { CpbComponent } from './cpb/cpb.component';
import { TestComponent } from './test/test.component';
import { UserDetailsService } from './user-details.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    PageNotFoundComponent,
    CpbComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
