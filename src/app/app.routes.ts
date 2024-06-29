import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: 'privacy', component: PrivacyComponent  },
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent }
];


