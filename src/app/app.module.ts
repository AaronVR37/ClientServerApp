import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponentComponent } from './auth/register-component/register-component.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { NavigationComponentComponent } from './shared/navigation-component/navigation-component.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RibbonComponent } from './shared/ribbon/ribbon.component';

imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NotfoundComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RibbonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
