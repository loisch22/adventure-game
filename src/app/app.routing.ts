import { WelcomeComponent } from './welcome/welcome.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomOneComponent } from './room-one/room-one.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'room-one/:name',
    component: RoomOneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
