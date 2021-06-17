import { Route } from '@angular/router';
import { DocComponent } from 'app/user/doc/doc.component';

export const docRoute: Route = {
  path: 'doc',
  component: DocComponent,
  data: {
    pageTitle: 'paperlabsApp.doc.title'
  }
};
