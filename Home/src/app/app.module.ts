import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Vertical1Module } from './domains/vertical1/vertical1.module';
import { Vertical3Module } from './domains/vertical3/vertical3.module';

import { MaterialModule } from 'src/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    Vertical1Module,
    Vertical3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
