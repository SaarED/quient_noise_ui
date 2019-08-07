import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quiet Noise';
  channels = [
    {id: 1, status: 1},
    {id: 2, status: 2},
    {id: 3, status: 3},
    {id: 4},
    {id: 5}
  ];
}
