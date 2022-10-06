// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}

import {Howl} from 'howler';
import {Component} from '@angular/core';
import {WebSocketClient} from '../js/Socket';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})

export class Tab5Page {

  player: Howl = null;
  isplaying = false;
  soc = new WebSocketClient();

  constructor(public navCtrl: NavController) {
  }

  SendMessage(i:String) {
    this.soc.SocketMessage(i);
  }

  EstabilishConnection() {
    this.soc.SocketConnection();
  }

  GoToTab4(){
    this.navCtrl.navigateForward('tab4');
  }
}