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

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  player: Howl = null;
  isplaying = false;
  soc = new WebSocketClient();

  constructor() {
  }

  SendMessage(i:String) {
    this.soc.SocketMessage(i);
  }

  EstabilishConnection() {
    this.soc.SocketConnection();
  }
}