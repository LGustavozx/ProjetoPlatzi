import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { LogoutModalComponent } from './shared/logout-modal/logout-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductDetailComponent,
    SearchBarComponent,
    LoginComponent,
    HomeComponent,
    CategoryDetailComponent,
    LogoutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
