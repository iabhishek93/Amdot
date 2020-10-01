import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { CategoriesComponent } from './categories/categories.component';
import { LogTableComponent } from './log-table/log-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    CategoriesComponent,
    LogTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
