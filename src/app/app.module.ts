import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, BrowserAnimationsModule, MatButtonModule, MatMenuModule, MatCardModule,MatFormFieldModule,MatInputModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
