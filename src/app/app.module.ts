import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosModule } from './formularios/formularios.module';
import { ProfessoresGpModule } from './professores-gp/professores-gp.module';
import { ProfessoresModule } from './professores/professores.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProfessoresModule,
    FormulariosModule,
    ProfessoresGpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
