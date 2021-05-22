import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GaugeModule } from 'angular-gauge';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import{MatTabsModule} from "@angular/material/tabs";
import{MatIconModule} from "@angular/material/icon";
import{MatSelectModule} from "@angular/material/select";
import{MatFormFieldModule} from "@angular/material/form-field";
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpHeadersInterceptor } from './interceptor/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptor/http-errors-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NoopAnimationsModule,
    FormsModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpHeadersInterceptor,
      multi:true,
      },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpErrorsInterceptor,
      multi:true,
      },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
