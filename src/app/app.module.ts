import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent }from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from "./coches/coches.component";
import { ProductosComponent } from "./productos/productos.component";

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    HomeComponent,
    ContactoComponent,
    ErrorComponent,
    ConversorPipe,
    CochesComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
