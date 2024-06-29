import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule,TranslateModule,HttpClientModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
    
  }

}
