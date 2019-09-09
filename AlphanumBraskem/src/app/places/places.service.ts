import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'PV-14 Braskem',
      'R. Benzeno, 1065, Camaçari - BA',
      'https://i.imgur.com/CxCtAzL.png',
      149.99
    ),
    new Place(
      'p2',
      'PE3 Braskem',
      'R. Benzeno, 1065, Camaçari - BA',
      'https://i.imgur.com/TKRqOwu.png',
      149.99
    ),
    new Place(
      'p3',
      'PV5 - Braskem',
      'R. Benzeno, 2391 - Polo de Camaçari, Camaçari - BA, 42810-020',
      'https://i.imgur.com/SBLZ0cd.png',
      149.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
