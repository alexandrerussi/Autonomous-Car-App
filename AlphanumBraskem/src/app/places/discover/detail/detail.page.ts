import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, IonRadio, IonRadioGroup, AlertController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';

import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private PATH = 'profiles/funcionario1/';
  private PATHP = 'plantas/';
  map: Map;
  place: Place;
  loadPlaces: Place[];
  teste: string;

  defaultSelectedRadio = 'pv14';
  // Get value on ionChange on IonRadioGroup
  selectedRadioGroup: any;
  // Get value on ionSelect on IonRadio item
  selectedRadioItem: any;

  constructor(
    private router: Router,
    private routerAc: ActivatedRoute,
    private navCtrl: NavController,
    private db: AngularFireDatabase,
    private placesService: PlacesService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.routerAc.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });

    this.loadPlaces = this.placesService.places;
    this.teste = '';
  }

  radioGroupChange(event) {
    console.log('radioGroupChange', event.detail);
    this.selectedRadioGroup = event.detail;
  }

  radioFocus() {
    console.log('radioFocus');
  }
  radioSelect(event) {
    console.log('radioSelect', event.detail);
    this.selectedRadioItem = event.detail;

    this.teste = this.selectedRadioItem.value;
  }

  radioBlur() {
    console.log('radioBlur');
  }

  chamarAlphanumcar() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop(); nao tem garantia
    const itemRef = this.db.object(this.PATH);
    itemRef.update({chamar: '1'});

    const itemRefP = this.db.object(this.PATHP);

    if (this.teste === '') {
      this.onEmptyRadioValue();
    } else if (this.teste === this.place.id) {
      this.onSameValueIdRadio();
    } else {
      itemRefP.update({
        id: this.place.id,
        embarque: this.teste
      });

      this.router.navigateByUrl('/mapa');
    }
  }

  onEmptyRadioValue() {
    this.alertCtrl.create({
      header: 'Aviso!',
      message: 'Por favor, selecione uma opção de embarque.',
      buttons: [{
        text: 'Fechar',
        role: 'fechar'
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  onSameValueIdRadio() {
    this.alertCtrl.create({
      header: 'Aviso!',
      message: 'Por favor, selecione uma opção diferente do seu destino.',
      buttons: [{
        text: 'Fechar',
        role: 'fechar'
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  ionViewDidEnter() {
    // this.leafletMap();
  }

  leafletMap() {
    this.map = new Map('mapId').setView([-12.654430, -38.317934], 15);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'Alphanum'
    }).addTo(this.map);

    // const markPoint = marker([-12.654430, -38.317934]);
    // markPoint.bindPopup('PV-14 Braskem').openPopup();
    // this.map.addLayer(markPoint);
    const planta1 = marker([-12.654430, -38.317934]);
    planta1.addTo(this.map)
      .bindPopup('PV-14 Braskem')
      .openPopup();

    const planta2 = marker([-12.6541916, -38.3203977]);
    planta2.addTo(this.map)
      .bindPopup('PE3 Braskem')
      .openPopup();
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
