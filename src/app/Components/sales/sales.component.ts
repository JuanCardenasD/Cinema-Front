import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent  implements OnInit{

  /**
 *
 */
  constructor(public api: ApiService) {
  
  }
  ngOnInit(): void {
    this.api.Get("Shows");
  }
}
