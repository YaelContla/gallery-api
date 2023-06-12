import { Component, ElementRef, ViewChild } from '@angular/core';
import { StarWars } from 'src/app/interfaces/starWars.interfaces';
import { StarWarsService } from 'src/app/services/starWars.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {

  // Funciona para tomar una referencia local de un solo input, si hubieran más inputs podríamos usar el @viewChildren
  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>;
  

  constructor( private starWarsService: StarWarsService ) { }
  

  get infoStarWars():StarWars[] {

    return this.starWarsService.respuestaList;

  }



 search( ) {
  
    const newSearch = this.searchInput.nativeElement.value;

    this.starWarsService.searchImg(newSearch);
    console.log({newSearch});

    // const filtro = this.starWarsService.respuestaList.filter( star => star.name === newSearch )
    const filtro = this.starWarsService.respuestaList.map( star => {
      if (star.name === "Luke Skywalker") {
        console.log("Soy ese", filtro)
      } else {
        console.log('No soy ese', filtro)
      }
      
    });
    
    // console.log('soy el filtro',filtro)

    this.searchInput.nativeElement.value = '';


 }

}
