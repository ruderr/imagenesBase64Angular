import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PublicarComponent } from './publicar/publicar.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PublicacionesService } from './publicaciones.service'

const rutas: Routes = [
  {path: '', component: HomeComponent},
  {path: 'publicar', component: PublicarComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule
  ],
  providers: [PublicacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
