import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private PATH = 'profiles/funcionario1/';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private db: AngularFireDatabase
    ) { }

  ngOnInit() {
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop(); nao tem garantia
    const itemRef = this.db.object(this.PATH);
    itemRef.set({chamar: '1'});
  }

}
