import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  styleUrls: ['./app-copyright.component.scss'],
  templateUrl: './app-copyright.component.html'
})
export class AppCopyrightComponent {
  public year = new Date().getFullYear();
}