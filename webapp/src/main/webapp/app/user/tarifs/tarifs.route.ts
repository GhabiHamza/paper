import { Route } from '@angular/router';
import { TarifsComponent } from 'app/user/tarifs/tarifs.component';

export const tarifsRoute: Route = {
  path: 'tarifs',
  component: TarifsComponent,
  data: {
    pageTitle: 'paperlabsApp.tarifs.title'
  }
};