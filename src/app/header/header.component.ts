import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeLink: string | null = null;
  @Output() openMenuChange: EventEmitter<boolean> = new EventEmitter();
 
  linkAboutMeActive: boolean = false;
  linkSkillsActive: boolean = false;
  linkProjectsActive: boolean = false;
  linkContactActive: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  activateLink(link: string) {
    this.linkAboutMeActive = false;
    this.linkSkillsActive = false;
    this.linkProjectsActive = false;
    this.linkContactActive = false;

    if (link === 'aboutMe') {
      this.linkAboutMeActive = true;
    } else if (link === 'skills') {
      this.linkSkillsActive = true;
    } else if (link === 'portfolio') {
      this.linkProjectsActive = true;
    } else if (link === 'contact') {
      this.linkContactActive = true;
    }

    this.isMenuOpen = false; 
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.activeLink = localStorage.getItem('activeLink');
      if (this.activeLink) {
        this.activateLink(this.activeLink.replace('#', '') as 'aboutMe' | 'skills' | 'portfolio' | 'contact');
      }
    }
  }

  switchLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.translate.use(language);
  }

  setActiveLink(event: Event, link: string): void {
    event.preventDefault();
    this.activeLink = link;
    localStorage.setItem('activeLink', link);

    const cleanLink = link.startsWith('#') ? link.replace('#', '') : link;
    this.activateLink(cleanLink as 'aboutMe' | 'skills' | 'portfolio' | 'contact');

    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

