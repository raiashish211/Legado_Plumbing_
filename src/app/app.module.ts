import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { PricingplansComponent } from './Component/pricingplans/pricingplans.component';
import { CouponsComponent } from './Component/coupons/coupons.component';
import { ClientsComponent } from './Component/clients/clients.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { HelpcComponent } from './Component/helpc/helpc.component';
import { ServicesComponent } from './Component/services/services.component';
import { RefersectionComponent } from './Component/refersection/refersection.component';
import { TestimonialComponent } from './Component/testimonial/testimonial.component';
import { ContactComponent } from './Component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PricingplansComponent,
    CouponsComponent,
    ClientsComponent,
    AboutusComponent,
    HelpcComponent,
    ServicesComponent,
    RefersectionComponent,
    TestimonialComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
