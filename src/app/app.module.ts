import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ServicioService } from './servicio.service';

import { HttpClientModule } from '@angular/common/http'

import { Ng2TableModule } from 'ng2-table/ng2-table';

import { FormsModule } from '@angular/forms'

import { PaginationModule } from "ng2-bootstrap/pagination";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    PaginationModule.forRoot(),
    BrowserModule,
    Ng2TableModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
