import { Component, OnInit } from '@angular/core';
import { ModalService } from './Services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cinema';
  online:string;



  ngOnInit() {
    this.online = localStorage.getItem('currentSession');
    console.log(this.online);
  }  
}
