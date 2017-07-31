//Core components
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { HomePage } from '../pages/home/home';
//import { TauxPage } from '../pages/taux/taux';
//import { FixerModel } from '../models/fixer.model';


import { Res }          from '../models/res.model';
import { Response }     from '../models/response.model';

@Injectable()

export class FixerApiService {
    
    devisedepart: string;
    deviseretour: string;
    montant: number;  
    devisedep: string;
    deviseret: string;      
    
    //response: Response;

    private baseUrl: string = 'http://api.fixer.io/latest';
    
    constructor(private http: Http){
        
    }
    /* public getLatestRatesBasedOn(dvd: string, dvr: string, nb: number): Promise<any|FixerModel> {
            this.devisedepart = dvd ;
            this.deviseretour = dvr;
            this.montant = nb;

        let url = `${this.baseUrl}?base=${this.devisedepart}&symbols=${this.deviseretour}`;
        console.log('URL '+url);
        console.log(this.devisedepart);
        console.log(this.deviseretour);
        console.log(this.montant);
        return this.http.get(url)
        .toPromise()
        //.then(response => response.json() as FixerModel)
        .then(response => response.json() as Response)
        .catch(error => console.log('Une erreur est survenue! ' +error))

    }       */


    public getLatestRatesBasedOn(dvd: string, dvr: string, nb: number): Promise<any|Response> {
            this.devisedepart = dvd ;
            this.deviseretour = dvr;
            this.montant = nb;

        let url = `${this.baseUrl}?base=${this.devisedepart}&symbols=${this.deviseretour}`;
        console.log('URL '+url);
        console.log(this.devisedepart);
        console.log(this.deviseretour);
        console.log(this.montant);
        return this.http.get(url)
        .toPromise()
        //.then(response => response.json() as FixerModel)
        .then(response => response.json() as Response)
        .catch(error => console.log('Une erreur est survenue! ' +error))

    }



   /* public getLatestRatesBasedOnAndReturn(dvdt: string, dvrt: string): Promise<any|FixerModel> {
            this.devisedep = dvdt ;
            this.deviseret = dvrt;

        let url = `${this.baseUrl}?base=${this.devisedep}&symbols=${this.deviseret}`;
        console.log('URL '+url);

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FixerModel)
        .catch(error => console.log('Une erreur est survenue! ' +error))

    }       */


 }
