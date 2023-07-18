import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationService } from './location.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationClassComponent } from './location-class/location-class.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LocationClassComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [LocationService],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
