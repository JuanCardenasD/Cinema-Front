import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-administrative',
  templateUrl: './administrative.component.html',
  styleUrls: ['./administrative.component.css']
})
export class AdministrativeComponent  implements OnInit{

  /**
 *
 */
  constructor(public api: ApiService) {
  
  }
  ngOnInit(): void {
    this.api.Get("Roles");
  }
}
