import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { ServicesComponent } from './Component/services/services.component';
import { CouponsComponent } from './Component/coupons/coupons.component';
import { PricingplansComponent } from './Component/pricingplans/pricingplans.component';
import { RefersectionComponent } from './Component/refersection/refersection.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HeaderComponent } from './Component/header/header.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  { path: 'about', component: AboutusComponent},
  {path:'services',component:ServicesComponent},
  {path:'coupons',component:CouponsComponent},
  {path:'pricing',component:PricingplansComponent},
  {path:'contacts',component:ContactComponent},
  {path:'referrals',component:RefersectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
