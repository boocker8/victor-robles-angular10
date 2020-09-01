import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { CochesComponent } from "./coches/coches.component";
import { ProductosComponent } from "./productos/productos.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'con', component: ContactoComponent },
  { path: 'con/:parametro', component: ContactoComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
