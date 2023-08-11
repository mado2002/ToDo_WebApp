import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Myservice } from './service';
import { TaskComponent } from './task/task.component'; // Import your service
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    routingComponents,
    SignupComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Add HttpClientModule to the imports array
  ],
  providers: [Myservice], // Remove HttpClient from providers
  bootstrap: [AppComponent]
})
export class AppModule { }
