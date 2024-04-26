import { Component, OnInit } from '@angular/core';
import { AnimateModule } from 'primeng/animate';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { MenuComponent } from '../../components/menu/menu.component';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimateModule, AnimateOnScrollModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }
}
