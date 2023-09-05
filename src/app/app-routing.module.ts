import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'pokemon/:id', component: PokemonDetailsComponent},
  {path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
