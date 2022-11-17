import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/model/Emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  emploicher="";
  listeEmploi:Emploi[]=[
    {reference: "1", titre: "ingen", entreprise: "actia", etat: true, },
    {reference: "2", titre: "chef de projet", entreprise: "mih", etat: false, },
    {reference: "3", titre: "techn", entreprise: "zetaprod", etat: true }, ]
  constructor() { }

  ngOnInit(): void {
  }


  calculer(p:Emploi){
    let nbr =0;
    let index=this.listeEmploi.indexOf(p);
    if(
    this.listeEmploi[index].etat ==true)
    {
       nbr ++ ;
    }
    return nbr ;
  }

}
