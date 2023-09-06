import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api: HttpClient) { }
  Url = "https://localhost:7025/api/"

  public async Get (controller:string){
    await this.api.get(this.Url+controller).toPromise().then((res=>{
      console.log(res);
    })
    )
  }
}
