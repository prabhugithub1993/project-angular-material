import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule , 
    BrowserAnimationsModule ,
    MatCheckboxModule ,
    MatRadioModule ,
    MatSelectModule , 
    MatSliderModule ,
    MatSlideToggleModule ,
    MatMenuModule , 
    MatSidenavModule ,
    MatToolbarModule , 
    MatListModule ,
    MatGridListModule ,
    MatCardModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

