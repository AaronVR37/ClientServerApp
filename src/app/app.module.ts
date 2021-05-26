import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponentComponent } from './auth/register-component/register-component.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { NavigationComponentComponent } from './shared/navigation-component/navigation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
