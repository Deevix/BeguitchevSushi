import { Component, OnInit } from '@angular/core';
import { Ipanier } from 'src/model/Ipanier';
import { ManagerPanierService } from 'src/app/service/manager-panier.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})

export class PanierComponent implements OnInit {
  panier: Ipanier[] = [];

  
  constructor(private managerPanierService: ManagerPanierService) { }

  ngOnInit(){
    this.panier = this.managerPanierService.getPanier();
  }

  getTotal(): number {
    return this.panier.reduce((total, panierBox) => total + panierBox.prix * panierBox.quantite, 0);
  }

  
  ajouterQuantite(box: Ipanier){
      box.quantite++;
  }

  diminuerQuantite(box: Ipanier){
      box.quantite--; 
      
      const nbB = this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);
      if (nbB == 1) {
        this.supprimerBox(box);
      }
    }

  supprimerBox(box : Ipanier){
    const index = this.panier.findIndex((element) => element.nom === box.nom); 
    if (index !== -1) {
      this.panier.splice(index, 1); 
    }
  }

  // total de la quantité
  getTtlQuantity(): number {
    return this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);
  }
}
