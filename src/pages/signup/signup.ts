import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  public first_name: any;
  public last_name: any;
  public username: any;
  public password: any;
  public email: any;
  public mobile_number: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  signup()
  {
   console.log('signup action' + this.first_name + this.last_name + this.username + this.password + this.email + this.mobile_number);
  
  }

}
