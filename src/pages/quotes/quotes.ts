import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {Quote} from "../../data/quote.interface";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navP: NavParams) {


  }

  onAddToFavorite(quote) {

  }

  ngOnInit() {
    console.log(this.navP);


    this.quoteGroup = this.navP.data;
  }

  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  //add elvis operator (.?) in template to use this approach
  // }


}
