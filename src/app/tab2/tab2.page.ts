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

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Track: { name: string, path: string }[] = [
    { "name": "VITA", "path": "../../assets/mp3/VITA.mp3" },
    { "name": "FORMAZIONE", "path": "../../assets/mp3/FORMAZIONE.mp3" },
    { "name": "OPERE", "path": "../../assets/mp3/OPERE.mp3" },
    { "name": "POLITICA", "path": "../../assets/mp3/POLITICA.mp3" },
    { "name": "ESILIO", "path": "../../assets/mp3/ESILIO.mp3" },
    { "name": "MORTE", "path": "../../assets/mp3/MORTE.mp3" }
  ];

  player: Howl = null;
  isplaying = false;

  constructor() {
  }

  start(i: number) {
    if (this.isplaying) {
      this.player.stop();
    }
      this.player = new Howl({
        src: this.Track[i].path,
        onplay: () => {
          console.log('In riproduzione');
          this.isplaying = true;
          //this.activeTrack = track;
        },
        onend: () => {
          console.log('Terminata');
        }
      })
      this.player.play();
  }

  stop() {
    if (this.player) {
      this.player.stop()
      console.log('Terminata');
    }
  }
}