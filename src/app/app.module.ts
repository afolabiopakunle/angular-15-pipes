import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { ShortenPipe } from './shorten.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
  ],
  declarations: [AppComponent, ShortenPipe, ReversePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }