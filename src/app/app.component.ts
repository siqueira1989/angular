import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppMaterialModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular';
}
