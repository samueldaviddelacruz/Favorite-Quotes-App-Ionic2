import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  person: string;
  text: string;

  constructor(private viewCtrl: ViewController, private params: NavParams) {

  }

  ionViewDidLoad() {
    this.person = this.params.get('person');
    this.text = this.params.get('text');
  }

  onClose(remove = false) {


    this.viewCtrl.dismiss(remove);
  }


}
