import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebServiceProviderService } from '../web-service-provider.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  channelModels = [];

  constructor(private webservice: WebServiceProviderService) {
  
    this.loadModels();

  }

  ngOnInit() {
  }

  loadModels() {

    let modelsPromises = [];

    for(let channelId = 1; channelId <= 5; channelId++) {
      modelsPromises.push(this.webservice.getModels(channelId).toPromise());
    }
    Promise.all(modelsPromises).then((channelPromises) => {
      for(let channel in channelPromises) {
        for(let modelType in channelPromises[channel]) {
          let modelStruct = channelPromises[channel][modelType];

          if(this.channelModels[modelStruct["Key"]]) {
            this.channelModels[modelStruct["Key"]].push(modelStruct["Value"]);
          } else {
            this.channelModels[modelStruct["Key"]] = [modelStruct["Value"]];
          }
        }
      }

      console.log(this.channelModels);
    });

  }

}
