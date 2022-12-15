import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',  // attribute type
  // selector : '.app-servers',   //  class type
  selector : 'app-servers',       // most used type
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
