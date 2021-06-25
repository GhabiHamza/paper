import { Routes } from '@angular/router';
import { legalDocumentDescriptionRoute } from 'app/user/legal-document-description/legal-document-description.route';
import { howItWorksRoute } from 'app/user/how-it-works/how-it-works.route';
import { contactRoute } from 'app/user/contact/contact.route';
import { faqRoute } from 'app/user/faq/faq.route';
import { legalGuidesRoute } from 'app/user/legal-guides/legal-guides.route';
import { legalNoticeRoute } from 'app/user/legal-notice/legal-notice.route';
import { privacyPolicyRoute } from 'app/user/privacy-policy/privacy-policy.route';
import { teamRoute } from 'app/user/team/team.route';
import { tarifsRoute } from 'app/user/tarifs/tarifs.route';
import { termsAndConditionsRoute } from 'app/user/terms-and-conditions/terms-and-conditions.route';
import { professionalSolutionRoute } from 'app/user/professional-solution/professional-solution.route';
import { aboutRoute } from './about-us/about-us.route';
import { documentsRoute } from 'app/user/documents/documents.route';

const USER_ROUTES = [
  howItWorksRoute,
  contactRoute,
  legalDocumentDescriptionRoute,
  faqRoute,
  legalGuidesRoute,
  legalNoticeRoute,
  privacyPolicyRoute,
  teamRoute,
  tarifsRoute,
  termsAndConditionsRoute,
  professionalSolutionRoute,
  aboutRoute,
  documentsRoute
];

export const userRoutes: Routes = [
  {
    path: '',
    children: USER_ROUTES
  }
];
