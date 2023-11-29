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
    var result: any;
    await this.api.get(this.Url+controller).toPromise().then((res=>{
      result=res;
    })
    )
    return result;
  }

  public async Post (controller:string, body:any){
    return await this.api.post(this.Url+controller, body).subscribe((res => {}))
  }

  public async Delete (controller:string, id:number){
    return await this.api.delete(this.Url+controller+"/"+id)
  }

  public async Update (controller:string, id:string, body:any){
    return await this.api.put(this.Url+controller+"/"+id,body).subscribe((res => {}))
  }

  public async login (userName: string, pwd: string){
    var result;
    await this.api.get(this.Url+"Users"+"/"+userName+","+pwd).toPromise().then((res => {
      result = res;
      console.log(result)
    }));
    return result;
  }
}
