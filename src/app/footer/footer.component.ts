import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule,TranslateModule,HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public translateService: TranslateService, private router: Router) {
  }

  scrollToImprintsTop() {
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0); 
    });
  }

}
