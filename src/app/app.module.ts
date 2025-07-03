import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { MouseHoverDirective } from './mouse-hover.directive';
import { RideFilterPipe } from './ride-filter.pipe';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    MouseHoverDirective,
    RideFilterPipe,
    RideDetailsComponent,
    OfferRideComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
