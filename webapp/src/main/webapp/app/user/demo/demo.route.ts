import { Route } from '@angular/router';
import { DemoComponent } from 'app/user/demo/demo.component';

export const demoRoute: Route = {
  path: 'demo',
  component: DemoComponent,
  data: {
    pageTitle: 'paperlabsApp.demo.title'
  }
};
