import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { CardComponent } from './pages/card/card.component';


export const routes: Routes = [
    {path: 'inicio',component: InicioComponent},
    {path: 'acercade',component: AboutComponent},
    {path: 'tabla',component: TablaComponent},
    {path: 'card',component: CardComponent},


    {path: '**',component: InicioComponent},
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes,{useHash:true})],
//     exports: [RouterModule]
// })
// export class AppRoutinModule{}

