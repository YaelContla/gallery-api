import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarWars } from '../interfaces/starWars.interfaces';

@Injectable({ providedIn: 'root' })
export class StarWarsService {

  public respuestaList: StarWars[] = [];

  private _textHistory: string[] = [];
  private apiUrl = 'https://akabab.github.io/starwars-api/api/all.json';

  constructor( private http: HttpClient ) { }

  get textHistory() {
    return [...this._textHistory];
  }

  private organizeHistory(text:string){
    text = text.toLowerCase();

    if (this._textHistory.includes(text)) {
      this._textHistory = this._textHistory.filter( (oldText) => oldText !== text );
    }

    this._textHistory.unshift( text );
    this._textHistory = this.textHistory.splice(0,10);

  }

  searchImg( text: string):void {

    if(text.length === 0) return;
    this.organizeHistory(text);

    // console.log(this._textHistory);

    this.http.get<StarWars[]>(this.apiUrl)
      .subscribe( resp => {
        
        this.respuestaList = resp
        console.log(this.respuestaList)
      });
  }
}
