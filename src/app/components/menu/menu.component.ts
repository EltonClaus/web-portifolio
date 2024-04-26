import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    MenubarModule,
    AnimateOnScrollModule,
    ButtonModule,
    CommonModule,
    HomeComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  isMenuOpen = false;

  scroll(target: string) {
    let projetos = document.querySelector('#projetos') as any;
    let skills = document.querySelector('#skills') as any;
    let sobre = document.querySelector('#sobre') as any;
    let home = document.querySelector('#home') as any;

    switch (target) {
      case projetos.id:
        projetos?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case skills.id:
        skills?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case sobre.id:
        sobre?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case home.id:
        home?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
    }
  }

  ngOnInit(): void {}
}
