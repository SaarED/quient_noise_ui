import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quiet Noise';
  channels = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}];
}
