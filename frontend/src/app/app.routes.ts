import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { NgModule } from '@angular/core';
import { FoodPageComponent } from './components/page/food-page/food-page.component';
import { TagsComponent } from './components/partials/tag/tag.component';
import { CartPageComponent } from './components/page/cart-page/cart-page.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:searchTerm', component: HomeComponent},
    {path: 'food/:id', component: FoodPageComponent},
    {path: 'tag/:tag', component: HomeComponent},
    {path: 'cart-page', component: CartPageComponent},
    {path: 'home', component: HomeComponent},
];