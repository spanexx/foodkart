import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { NgModule } from '@angular/core';
import { FoodPageComponent } from './components/page/food-page/food-page.component';
import { TagsComponent } from './components/partials/tag/tag.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:searchTerm', component: HomeComponent},
    {path: 'food/:id', component: FoodPageComponent},
    {path: 'tag/:tag', component: HomeComponent}
];