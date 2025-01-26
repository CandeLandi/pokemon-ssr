import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export default class PricingPageComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta)


  ngOnInit(): void {
    this.title.setTitle('Contacto');
    this.meta.updateTag({name: 'description', content: 'Contacto de la app'});

    this.meta.updateTag({ name: 'og:title', content: 'About Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola,Mundo,Candela,Landi,Angular'
    })
  }

}
