import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Environment, GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  private loading: any;
  private map: GoogleMap;

  constructor(
    private plataform: Platform,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement;

    this.mapElement.style.width = this.plataform.width() + 'px';
    this.mapElement.style.height = this.plataform.height() + 'px';

    this.loadMap();
  }

  async  loadMap() {
    this.loading = this.loadingCtrl.create({message: 'Por favor, aguarde...'});
    await this.loading.present();

    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyA-VQUeGVgTh1xDaXHAUPn6pM2NIlKJhpg',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyA-VQUeGVgTh1xDaXHAUPn6pM2NIlKJhpg'
    });

    this.map = GoogleMaps.create(this.mapElement);
  }
}
