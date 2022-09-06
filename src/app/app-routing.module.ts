import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: "home", component: CardComponent},
  {path: "detail/:id", component: DetailComponent},
  {path: "",pathMatch:'full',redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
