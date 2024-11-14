import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from 'libs/button/src/lib/button/button.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'admin';
}
