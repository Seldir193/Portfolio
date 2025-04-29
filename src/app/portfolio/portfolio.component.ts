import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule ,TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,TranslateModule,HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'] 
})
export class PortfolioComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  portfolio = [
    {
      projectName:  'Join',
      projectTechnologie: 'HTML | CSS | Javascript',
      projectDescription:  'portfolio.join',
      projectLink:  'https://join.selcuk-kocyigit.de',
      projectGitHub: 'https://github.com/Seldir193/Join',
      projectImg:  'laptop1.png',
      translatedDescription: '',
    },
    {
      projectName: 'El Pollo Loco',
      projectTechnologie: 'HTML | CSS | Javascript',
      projectDescription:
        'portfolio.epl',
      projectLink: 'https://el-pollo-loco.selcuk-kocyigit.de',
      projectGitHub: 'https://github.com/Seldir193/El-Pollo-Loco',
      projectImg: 'laptop-pollo.png',
      translatedDescription: '',
    },
    {
      projectName: 'DABubble',
      projectTechnologie: 'HTML | SCSS | Angular | Typescript | Firebase',
      projectDescription:
        'portfolio.dbl',
      projectLink: 'https://dabubble.selcuk-kocyigit.de',
      projectGitHub: 'https://github.com/Seldir193/DABubble.git',
      projectImg: 'laptop2.png',
      translatedDescription: '',
    },
    {
      projectName: 'Coderr Backend',
      projectTechnologie: 'Python | Django | Django Rest Framework | PostgreSQL',
      projectDescription: 'portfolio.cdrbe',         
      projectLink: 'https://coderr.selcuk-kocyigit.de/',
      projectGitHub: 'https://github.com/Seldir193/coderr_backend',
      projectImg: 'laptop11.png',
      translatedDescription: '',
    },
  ]

  ngOnInit(): void {
    this.loadTranslations();
  }

  loadTranslations(): void {
    this.portfolio.forEach(project => {
      this.translateService.get(project.projectDescription).subscribe((res: string) => {
        project.translatedDescription = res;
      });
    });
  }
}
