import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule,TranslateModule,RouterLink, RouterLinkActive,HttpClientModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})

export class PrivacyComponent implements OnInit {

  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
  }
  
}