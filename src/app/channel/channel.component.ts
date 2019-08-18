import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebServiceProviderService } from './../web-service-provider.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  record = false;
  channel = null;

  constructor(private route: ActivatedRoute, private webservice: WebServiceProviderService) {
    this.route.params.subscribe( params => {
        this.channel = {
          id: params.id,
        }

        // Run model
        this.runModel();

        var interval = setInterval(() => {
          this.runModel();
        }, 5000);
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
    console.log(this.channel.id);
    this.webservice.startRecord(this.channel.id).subscribe((data) => {
      this.record = true;
    }, (err) => {
      this.record = false;
      console.log(err);
    });
  }

  stopRecord() {
    this.webservice.stopRecord(this.channel.id).subscribe((data) => {
      this.record = false;
    }, (err) => {
      this.record = true;
      console.log(err);
    });
  }

  registerEvent(f: NgForm) {
    let formValues = f.form.value;
    this.webservice.postEvent(this.channel.id, formValues).subscribe((data) => {
      alert("Posted");
    }, (err) => {
      alert("Error");
      console.log(err);
    });
  }

  runModel() {
    this.webservice.getModels(this.channel.id).subscribe((data) => {
      this.channel.properties = [];
      for(let model in data) {
        this.channel.properties.push({
          name: data[model]["Key"],
          label: 'פרמטר: '+data[model]["Key"],
          value: data[model]["Value"],
          conf: data[model]["Conf"]
        });
      }
    }, (err) => {
      this.channel.properties = [];
    });
  }

}
