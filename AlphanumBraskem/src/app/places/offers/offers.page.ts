import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class OffersPage implements OnInit {
  private PATH = 'profiles/funcionario1/';
  offers: Place[];
  isDisabled = true;
  firstName = '';

  constructor(
      private placesService: PlacesService,
      private db: AngularFireDatabase,
    ) { }

  ngOnInit() {
    const x: OffersPage = this;
    // this.offers = this.placesService.places;
    // const itemRef = this.db.object(this.PATH);
    this.db.database.ref(this.PATH).orderByChild('nome').once('value', (snapshot) => {
      // tslint:disable-next-line: only-arrow-functions
      snapshot.forEach(function(child) {
        console.log(child.val());
        x.setFirstName(child.val());
        });
      });
  }

  setFirstName(nome: string) {
    this.firstName = nome;
  }

  enableInputs() {
    this.isDisabled = false;
  }

  disableInputs() {
    this.isDisabled = true;
  }

  editarPerfil() {
    // Recupera nome no input
    const nomeInput = document.getElementById('nomeInput').getElementsByTagName('input')[0];

    // Referencia para caminho firebase
    const itemRef = this.db.object(this.PATH);
    itemRef.set({nome: nomeInput});
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const nomeInput = form.value.nome;
    console.log(form);

    // Referencia para caminho firebase
    const itemRef = this.db.object(this.PATH);
    itemRef.set({nome: nomeInput});

    this.disableInputs();
    console.log(this.isDisabled);
  }

}
