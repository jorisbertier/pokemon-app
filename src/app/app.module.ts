import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ArticleComponent,
    NavbarComponent,
    PokemonDetailsComponent,
    StoreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
