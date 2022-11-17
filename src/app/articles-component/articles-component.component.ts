import { Component, OnInit } from '@angular/core';
import { Article } from 'src/model/Article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  cat:String ="Travail";
titre:String="Les articles du jour";
listeArticles:Article[]=[
  {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
  {titre:'Les nouveaux parents',contenu:'Les nouveaux parents. ..',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
  {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'} ]
  constructor() { }

  ngOnInit(): void {
  }
 changeColor1='pink'
  changeColor(a:Article){
    let cat:String ="Travail";
   let index =this.listeArticles.indexOf(a);
    if(this.listeArticles[index].categorie=="Travail"){
      this.changeColor1='bleu';

    }return this.changeColor1;

  }

}
