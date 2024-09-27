import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./first-component/first-component.component";
import { DirectNameDirective } from './direct-name.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, DirectNameDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isHide = false;

  title = 'app-001';
  arr = [1, 2, 3, 4]
}
