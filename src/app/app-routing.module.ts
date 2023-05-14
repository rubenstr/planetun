import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListagemComponent } from './components/listagem/listagem.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },{
    path: "login", component: LoginComponent
  }, {
    path: "listagem", component: ListagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
