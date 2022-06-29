import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { CAttributeComponent } from './c-attribute/c-attribute.component';
import { DEventComponent } from './d-event/d-event.component';
import { ETwoWayComponent } from './e-two-way/e-two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    BPropertyComponent,
    CAttributeComponent,
    DEventComponent,
    ETwoWayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
