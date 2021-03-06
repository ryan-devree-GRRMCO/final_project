import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { VoteCommentComponent } from './vote-comment/vote-comment.component';
import { HttpClientModule } from '@angular/common/http';
import { MjCategoryComponent } from './mj-category/mj-category.component';
import { BuildingCategoryComponent } from './building-category/building-category.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { MjCategoryListComponent } from './mj-category-list/mj-category-list.component';
import { BpCategoryListComponent } from './bp-category-list/bp-category-list.component';
import { MapLocationsComponent } from './map-locations/map-locations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    VoteCommentComponent,
    MjCategoryComponent,
    BuildingCategoryComponent,
    AboutComponent,
    MjCategoryListComponent,
    BpCategoryListComponent,
    MapLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
