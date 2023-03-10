import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HeaderloginComponent } from './headerlogin/headerlogin.component';
import { FooterloginComponent } from './footerlogin/footerlogin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { PublishComponent } from './publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HeaderloginComponent,
    FooterloginComponent,
    RegisterComponent,
    BookmarksComponent,
    ErrorPageComponent,
    UpdatePasswordComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
