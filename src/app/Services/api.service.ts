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

  public async Post (controller:string, body:string){
    return await this.api.post(this.Url+controller, body).subscribe((res => {}))
  }

  public async Delete (controller:string, id:string){
    return await this.api.delete(this.Url+controller+"/"+id)
  }

  public async Update (controller:string, id:string, body:string){
    return await this.api.put(this.Url+controller+"/"+id,body)
  }
}
