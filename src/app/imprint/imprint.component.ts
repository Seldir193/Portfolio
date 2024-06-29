import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule,TranslateModule,RouterLink, RouterLinkActive,HttpClientModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent {

  constructor(public translateService: TranslateService) {}
  
}
