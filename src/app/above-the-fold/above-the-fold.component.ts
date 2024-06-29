import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule,HttpClientModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent implements OnInit, OnDestroy {
  private setLanguage: Subscription | undefined;
  languageToSelected: boolean = false;
  defaultLanguage: string = '';

  constructor(
    public translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setLanguage = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.useLang(event.lang);
      });

      const storedLanguage = localStorage.getItem('language') || 'en';
      this.translateService.setDefaultLang(storedLanguage);
      this.translateService.use(storedLanguage);
      this.useLang(storedLanguage);
    }
  }

  ngOnDestroy(): void {
    if (this.setLanguage) {
      this.setLanguage.unsubscribe();
    }
  }

  useLang(lang: string): void {
    this.defaultLanguage = lang;
    this.languageToSelected = (lang === 'de');
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
  }
}