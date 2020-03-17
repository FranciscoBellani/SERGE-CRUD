import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'add-Reserva',
    loadChildren: () => import('./add-Reserva/add-Reserva.module').then(m => m.AddReservaPageModule)
  },
  {
    path: 'edit-Reserva/:id',
    loadChildren: () => import('./edit-Reserva/edit-Reserva.module').then(m => m.EditReservaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
