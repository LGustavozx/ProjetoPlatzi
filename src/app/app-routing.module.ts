import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard] },
  { path: 'category/:id', component: CategoryDetailComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
