import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { CAttributeComponent } from './c-attribute/c-attribute.component';
import { DEventComponent } from './d-event/d-event.component';
import { ETwoWayComponent } from './e-two-way/e-two-way.component';
import { GNgIfComponent } from './g-ng-if/g-ng-if.component';
import { HNgForComponent } from './h-ng-for/h-ng-for.component';
import { INgSwitchComponent } from './i-ng-switch/i-ng-switch.component';
import { JNgClassComponent } from './j-ng-class/j-ng-class.component';
import { KNgStyleComponent } from './k-ng-style/k-ng-style.component';
import { GameNumbersComponent } from './game-numbers/game-numbers.component';
import { VndformatPipe } from './vndformat.pipe';
import { NInputComponent } from './n-input/n-input.component';
import { OOutputComponent } from './o-output/o-output.component';

@NgModule({
  declarations: [
    AppComponent,
    BPropertyComponent,
    CAttributeComponent,
    DEventComponent,
    ETwoWayComponent,
    GNgIfComponent,
    HNgForComponent,
    INgSwitchComponent,
    JNgClassComponent,
    KNgStyleComponent,
    GameNumbersComponent,
    VndformatPipe,
    NInputComponent,
    OOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
