import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
 
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  kreiranServer:string = "ima vrednost";
  serverCreate:string = "";
  isserverCreate:boolean = false;
  constructor() {
      setTimeout(() => {
        this.allowNewServer = false;
      }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateSerever()
  {
      this.isserverCreate = true;
    //this.serverCreate = "Server je kreiran! njegovo ime je " + this.kreiranServer;
  }

  kreirannje(event:Event)
  {
    this.kreiranServer = (<HTMLInputElement>event.target).value;
  }

}
