import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { movieModel } from '../Models/movieModel';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  movie:movieModel = new movieModel;
  title = "";
  action = new BehaviorSubject("");
  online:boolean = false;
  constructor() { }
}
