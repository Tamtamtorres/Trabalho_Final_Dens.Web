import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';

const routes: Routes = [
  {path:"", component: SolicitacaoComponent},
  {path:"reservas", component: ReservasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
