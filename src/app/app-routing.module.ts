import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: "channel/:id", component: ChannelComponent },
  { path: "", component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }