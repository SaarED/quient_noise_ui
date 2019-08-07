import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceProviderService {

  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  startRecord(channel: number) {
    return this.http.post(this.baseUrl+"/StartRecord", { Channel: channel });
  }

  stopRecord(channel: number) {
    return this.http.post(this.baseUrl+"/StopRecord", { Channel: channel });
  }

  getAllChannels() {
    return this.http.get(this.baseUrl+"/GetChannels");
  }

  getChannelAI(channel: number) {
    return this.http.get(this.baseUrl+"/channel/ai/"+channel);
  }

  getLastChannelEvent(channel: number) {
    return this.http.get(this.baseUrl+"/channel/events/"+channel);
  }

}
