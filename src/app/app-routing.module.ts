import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { FlipComponent } from "./views/landing/flip/flip.component";
import { FliptwoComponent } from "./views/landing/fliptwo/fliptwo.component";
import { FlipthreeComponent } from "./views/landing/flipthree/flipthree.component";
import { FlipfourComponent } from "./views/landing/flipfour/flipfour.component";
import { BikeComponent } from "./views/landing/bike/bike.component";
import { FlipbikeComponent } from "./views/landing/flipbike/flipbike.component";
import { CourierComponent } from "./views/landing/courier/courier.component";
const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "flip", component: FlipComponent },
  { path: "fliptwo", component: FliptwoComponent },
  {path: "flipthree", component:FlipthreeComponent},
  {path: "flipfour", component: FlipfourComponent},
 {path: "bike" , component: BikeComponent},
 {path:"flipbike", component:FlipbikeComponent},
 {path: "courier", component:CourierComponent},
  { path: "landing", component: LandingComponent },
  { path: "", component: LandingComponent},
  { path: "**", redirectTo: "", pathMatch: "full" },
  
  
  { path: "flip", component: FlipComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
