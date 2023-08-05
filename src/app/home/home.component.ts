import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MatIconModule],
})
export class HomeComponent implements OnInit {
  links = [
    { title: 'Главная' },
    { title: 'Галерея' },
    { title: 'Проекты' },
    { title: 'Сертификаты' },
    { title: 'Контакты' },
  ];

  tasks = [
    { id: 1, width: '25rem', title: 'Создание комфортных условий и повышение качества обслуживания клиентов' },
    { id: 2, width: '42rem', title: 'Постоянно совершенствовать качество предостовляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке' },
  ];

  projects = [
    { id: 1, active: false, title: 'ДОСУГОВЫЙ ЦЕНТР 1', url: '/assets/photo/image 15.png', style: 'project__img-one', textSize: 'project__text--one' },
    { id: 2, title: 'ДОСУГОВЫЙ ЦЕНТР 2', url: '/assets/photo/image 15.png', style: 'project__img-two', textSize: 'project__text--two' },
    { id: 3, title: 'ДОСУГОВЫЙ ЦЕНТР 3', url: '/assets/photo/image 16.png', style: 'project__img-three', textSize: 'project__text--three' },
    { id: 4, title: 'ДОСУГОВЫЙ ЦЕНТР 4', url: '/assets/photo/image 17.png', style: 'project__img-four', textSize: 'project__text--four' },
    { id: 5, title: 'ДОСУГОВЫЙ ЦЕНТР 5', url: '/assets/photo/image 18.png', style: 'project__img-five', textSize: 'project__text--five' },
  ];

  active: boolean = false;

  myForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required,]),
    userPhone: new FormControl('', [Validators.required,]),
    userEmail: new FormControl('', [Validators.required,]),
    userProduct: new FormControl('', [Validators.required,]),
    userMessage: new FormControl('', [Validators.required,]),
  });

  constructor(
    private sanitization: DomSanitizer,
  ) { }

  ngOnInit(): void {

  }

  getSafeUrl(url: string) {
    return this.sanitization.bypassSecurityTrustStyle('url(\'' + url + '\')');
  }
}
