import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,AngularToastifyModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
