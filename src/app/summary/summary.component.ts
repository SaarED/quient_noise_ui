import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  channel = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.channel = {
        id: params.id,
        properties: [
          { name: 'param 1', data: '123', confidence: 0.8 },
          { name: 'param 2', data: '123', confidence: 0.8 },
          { name: 'param 3', data: '123', confidence: 0.8 },
          { name: 'param 4', data: '123', confidence: 0.8 },
          { name: 'param 5', data: '123', confidence: 0.8 },
          { name: 'param 1', data: '123', confidence: 0.8 },
          { name: 'param 2', data: '123', confidence: 0.8 },
          { name: 'param 3', data: '123', confidence: 0.8 },
          { name: 'param 4', data: '123', confidence: 0.8 },
          { name: 'param 5', data: '123', confidence: 0.8 },
        ]
      }
    );
  }

  ngOnInit() {
  }

}
