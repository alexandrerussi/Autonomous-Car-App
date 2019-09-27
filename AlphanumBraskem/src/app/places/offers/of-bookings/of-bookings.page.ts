import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-of-bookings',
  templateUrl: './of-bookings.page.html',
  styleUrls: ['./of-bookings.page.scss']
})
export class OfBookingsPage implements OnInit {
  place: Place;

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    // this.router.paramMap.subscribe(paramMap => {
    //   if (!paramMap.has('placeId')) {
    //     this.navCtrl.navigateBack('/places/tabs/offers');
    //     return;
    //   }
    //   this.place = this.placesService.getPlace(paramMap.get('placeId'))
    // });
  }
}
