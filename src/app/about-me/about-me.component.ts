import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule,TranslateModule,HttpClientModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.onLangChange.subscribe((event) => {
    });
  }
}
