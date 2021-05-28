import { NgModule } from '@angular/core';
import { LegalDocumentDescriptionComponent } from './legal-document-description/legal-document-description.component';
import { RouterModule } from '@angular/router';
import { PaperlabsSharedModule } from 'app/shared/shared.module';
import { ContactComponent } from 'app/user/contact/contact.component';
import { HowItWorksComponent } from 'app/user/how-it-works/how-it-works.component';
import { userRoutes } from 'app/user/user.route';
import { TeamComponent } from './team/team.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalGuidesComponent } from './legal-guides/legal-guides.component';
import { FaqComponent } from './faq/faq.component';
import { ProfessionalSolutionComponent } from './professional-solution/professional-solution.component';
import { ContactExpertFormComponent } from './professional-solution/contact-expert-form/contact-expert-form.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    HowItWorksComponent,
    ContactComponent,
    LegalDocumentDescriptionComponent,
    TeamComponent,
    TermsAndConditionsComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    LegalGuidesComponent,
    FaqComponent,
    ProfessionalSolutionComponent,
    ContactExpertFormComponent,
    TarifsComponent,
    AboutUsComponent
  ],
  imports: [PaperlabsSharedModule, RouterModule.forChild(userRoutes)]
})
export class UserModule {}
