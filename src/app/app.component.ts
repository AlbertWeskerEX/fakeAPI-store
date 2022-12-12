import { Component } from '@angular/core';
import { ConfigService } from "./config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _localService: ConfigService) {
  }
  title = 'fakeAPI';
getData() {
  this._localService.location().subscribe((rez) => {
    console.log(rez)
  })
}
}
