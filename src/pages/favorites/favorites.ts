import {Component} from "@angular/core";


import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {MenuController, ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  quotes: Quote[];


  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private  menuCtrl:MenuController,
              private settingsService:SettingsService) {

  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();

    modal.onDidDismiss((remove: boolean) => {
      this.removeQuote(quote,remove);
    })
  }

   private removeQuote(quote:Quote,remove:boolean){
     if (remove) {
       this.quotesService.removeQuoteFromFavorites(quote);
       //this.quotes = this.quotesService.getFavoriteQuotes();
       const position = this.quotes.findIndex((quoteEle) => {
         return quoteEle.id == quote.id;
       });
       this.quotes.splice(position, 1);
     }
   }

  onRemoveFromFavorites(quote: Quote){

    this.removeQuote(quote,true);
  }

  getBackground(){
    return this.settingsService.isAltBackground()?'altQuoteBackground':'quoteBackground';
  }
  isAltBackground(){

    return this.settingsService.isAltBackground();

  }


}
