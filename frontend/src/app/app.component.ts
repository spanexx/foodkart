import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';
import { homedir } from 'os';
import { HomeComponent } from './components/page/home/home.component';
import { TempService } from './services/temp.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TempService]
})
export class AppComponent {
  title = 'frontend';
}
