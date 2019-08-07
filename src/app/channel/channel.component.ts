import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  record = false;
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
    this.route.paramMap.subscribe(parmaps => {
      if(parmaps) {
        data => this.channel = data
      }
    });
  }

  startRecord() {
    this.record = true;
  }

  stopRecord() {
    this.record = false;
  }

}
