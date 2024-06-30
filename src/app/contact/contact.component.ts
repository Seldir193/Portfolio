import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule,TranslateModule,RouterLink, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent  {
  constructor(public translateService: TranslateService, private router: Router) {
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  messageSent = false;


  post = {
    endPoint: 'https://selcuk-kocyigit.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.messageSent = true;
            
            setTimeout(() => {
              this.messageSent = false;
            }, 5000);
          },
          error: (error) => {
          },
          complete: () => {
          }
        });
    }
  }
  
  isSubmitted = false;

  onSubmitClick() {
    this.isSubmitted = true;
  }

  onCheckboxChange() {
    if (this.isSubmitted) {
       this.isSubmitted = false;
    }
  }

  scrollToPrivacysTop() {
    this.router.navigateByUrl('/privacy').then(() => {
      window.scrollTo(0, 0); 
    });
  }

  }
