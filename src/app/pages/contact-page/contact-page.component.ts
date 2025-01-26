import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent implements OnInit{

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
