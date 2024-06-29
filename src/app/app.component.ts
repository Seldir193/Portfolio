import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive, } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HttpClientModule } from '@angular/common/http';

import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImprintComponent,MainContentComponent,RouterLink,RouterLinkActive,RouterOutlet,HeaderComponent,AboveTheFoldComponent,AboutMeComponent,MySkillsComponent,PortfolioComponent,ContactComponent,PrivacyComponent,FooterComponent,CommonModule,TranslateModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  })

  export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor() { }
  
  ngOnInit():void {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
      });
    }
  }
}