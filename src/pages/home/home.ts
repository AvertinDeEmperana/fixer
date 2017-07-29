import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

//import { TauxPage } from '../../pages/taux/taux';
import { FixerApiService } from  '../../services/fixer.service'; 
import { FixerModel } from '../../models/fixer.model';

import { Response } from '../../models/response.model';
import { Res } from '../../models/res.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    devisedepart: string;
    deviseretour: string;
    montant: number; 

    data: Response = new Response();
    //res : Res = new Res();

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private fixerApiService: FixerApiService){  

                                             }
    alert() : void{
      let alert = this.alertCtrl.create({
      title: 'Request',
      subTitle: 'Execution de la requete! ',
      buttons: ['OK']
    });
      
      this.fixerApiService.getLatestRatesBasedOn(this.devisedepart, this.deviseretour, this.montant)
    .then(fixerFetched => { 
      this.data = fixerFetched 
      console.log(this.data);
    
      console.log(this.data.rates);
    })
    .catch(error => console.log('Erreur de l\'alerte' +error));      
    alert.present();  
  }

 /* private showTaux(){
    this.navCtrl.push(TauxPage);

  } */

}
