import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  private PATHP = 'plantas/';
  destino: string;
  map: Map;

  constructor(
    private db: AngularFireDatabase,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

  }

  setDestino(destino: string) {
    this.destino = destino;
    console.log(this.destino);
  }

  ionViewDidEnter() {
    const x: MapaPage = this;
    // this.offers = this.placesService.places;
    // const itemRef = this.db.object(this.PATH);
    const keys = [];
    const counts = [];
    this.db.database.ref(this.PATHP).orderByChild('nome').once('value', (snapshot) => {
      // tslint:disable-next-line: only-arrow-functions
      snapshot.forEach(function(child) {
        // console.log(child.val());
        keys.push(child.val());
        });
      console.log(keys);
      x.setDestino(keys[1]);
      this.leafletMap();
      });
  }

  leafletMap() {
    console.log('testeantes');
    this.map = new Map('mapId').setView([-12.654430, -38.317934], 15);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'Alphanum'
    }).addTo(this.map);

    // const markPoint = marker([-12.654430, -38.317934]);
    // markPoint.bindPopup('PV-14 Braskem').openPopup();
    // this.map.addLayer(markPoint);

    if (this.destino === 'pv14') {
      const markPoint = marker([-12.654430, -38.317934], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
       })
      });
      markPoint.bindPopup('PV-14 Braskem').openPopup();
      this.map.addLayer(markPoint);
      console.log('teste');
    } else if (this.destino === 'pe3') {
      const planta2 = marker([-12.6541916, -38.3203977], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
       })
      });
      planta2.addTo(this.map)
        .bindPopup('PE3 Braskem')
        .openPopup();
    } else if (this.destino === 'pv5') {
      const planta3 = marker([-12.656184, -38.316306]);
      planta3.addTo(this.map)
        .bindPopup('PV5 Braskem')
        .openPopup();
    }
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
