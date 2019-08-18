import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceProviderService {

  baseUrl = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) {}

  startRecord(channel: number) {
    return this.http.post(this.baseUrl+"/StartRecord?Channel="+channel, {});
  }

  stopRecord(channel: number) {
    return this.http.post(this.baseUrl+"/StopRecord?Channel="+channel, { });
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

  postEvent(channel: number, parameters: any) {
    
    return this.http.post(this.baseUrl+"/TagRecording?" + 
                              Object.keys(parameters).map(function(key) {
                                  return encodeURIComponent(key) + '=' +
                                      encodeURIComponent(parameters[key]);
                              }).join('&'), {});
  } 

  getModels(channel: number) {
    return this.http.get(this.baseUrl+"/GetModelData?Channel="+channel);
  }

}
