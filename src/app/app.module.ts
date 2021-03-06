import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { ResultPageComponent } from './Pages/result-page/result-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerLoaderComponent } from './Spineer/spinner-loader/spinner-loader.component'
import { AuthInterceptor } from './Http-Interceptor/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultPageComponent,
    SpinnerLoaderComponent
  ],
  imports: [ 
 
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
