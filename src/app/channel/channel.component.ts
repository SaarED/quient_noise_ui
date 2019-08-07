import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  channel = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.channel = params.id );
  }

  ngOnInit() {
    this.route.paramMap.subscribe(parmaps => {
      if(parmaps) {
        data => this.channel = data 
      }
    });
  }

}
