import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FixerApiService } from '../../services/fixer.service';
//import { FixerModel } from '../../models/fixer.model';

@Component({
  selector: 'page-taux',
  templateUrl: 'taux.html'
})
export class TauxPage {

  devisedep: string;
  deviseret: string;

  //dataT: FixerModel;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private fixerApiService: FixerApiService) {
    console.log("Hello World");
                                             }

      alerter() : void{
      let alert = this.alertCtrl.create({
      title: 'Request',
      subTitle: 'Execution de la requete! ',
      buttons: ['OK']
    });
      
    /*  this.fixerApiService.getLatestRatesBasedOnAndReturn(this.devisedep, this.deviseret)
      .then(fixerFetched => { 
      this.dataT = fixerFetched 
      console.log(this.dataT);
      console.log(this.dataT.rates)
    })
    .catch(error => console.log('Erreur de l\'alerte' +error)); */
    }

}
