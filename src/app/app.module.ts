import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { DinamicoComponent } from './components/dinamico/dinamico.component';
import { RepasoDinamicoComponent } from './components/repaso-dinamico/repaso-dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DinamicoComponent,
    RepasoDinamicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
