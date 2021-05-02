import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataServiceService } from './data-service.service'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
