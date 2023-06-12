import { Component } from '@angular/core';
import { StarWarsService } from 'src/app/services/starWars.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor( private starWarsService: StarWarsService ) { }


  get text(): string[] {
    return this.starWarsService.textHistory;
  }

  searchAgain( txt: string):void {
    this.starWarsService.searchImg(txt);
  }

  

}
