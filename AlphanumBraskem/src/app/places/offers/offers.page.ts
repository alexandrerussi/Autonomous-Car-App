import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AngularFireDatabase } from '@angular/fire/database';
import { Key } from 'protractor';

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
  firstName: string;
  dataNasc: string;
  rg: string;
  senha: string;

  constructor(
      private placesService: PlacesService,
      private db: AngularFireDatabase,
    ) { }

  ngOnInit() {
    const x: OffersPage = this;
    // this.offers = this.placesService.places;
    // const itemRef = this.db.object(this.PATH);
    const keys = [];
    const counts = [];
    this.db.database.ref(this.PATH).orderByChild('nome').once('value', (snapshot) => {
      // tslint:disable-next-line: only-arrow-functions
      snapshot.forEach(function(child) {
        // console.log(child.val());
        keys.push(child.val());
        });
      console.log(keys);
      x.setDataNasc(keys[0]);
      x.setFirstName(keys[1]);
      x.setRg(keys[2]);
      x.setSenha(keys[3]);
      });
  }

  setDataNasc(dataNasc: string) {
    this.dataNasc = dataNasc;
  }

  setFirstName(nome: string) {
    this.firstName = nome;
  }

  setRg(rg: string) {
    this.rg = rg;
  }

  setSenha(senha: string) {
    this.senha = senha;
  }

  enableInputs() {
    this.isDisabled = false;
  }

  disableInputs() {
    this.isDisabled = true;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const nomeInput = form.value.nome;
    const dataNascInput = form.value.dataNasc;
    const rgInput = form.value.rg;
    const senhaInput = form.value.senha;
    // console.log(form);

    // Referencia para caminho firebase
    const itemRef = this.db.object(this.PATH);
    itemRef.set({
      nome: nomeInput,
      dataNasc: dataNascInput,
      rg: rgInput,
      senha: senhaInput,
    });

    this.disableInputs();
    console.log(this.isDisabled);
  }

}
