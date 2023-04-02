import { Injectable } from '@angular/core';
import { IBox } from 'src/model/IBox';
import { Ipanier } from '../../model/Ipanier';


@Injectable({
  providedIn: 'root'
})
export class ManagerPanierService {
  private panier: Ipanier[] = [];

  constructor() { }

  getPanier(): Ipanier[] {
    return this.panier;
  }

  ajouterBoxAuPanier(box: IBox){
    const index = this.panier.findIndex((element) => element.nom === box.nom);
    const nbB = this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);

    if (nbB > 0){
      this.panier[index].quantite++;
    } 
    else {
        const panierBox = new Ipanier(box.nom, 1, box.prix);
        this.panier.push(panierBox);
    }
  }

  miseAJourNombreBoxs(){
    return this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);

  }
}