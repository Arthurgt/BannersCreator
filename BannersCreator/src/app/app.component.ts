import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  width = 320;
  height = 420;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 20;
  fontColor = 'black';

  config: { [key: string]: string | Date } = null;

  layout = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };

  colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'black',
  ];

  constructor() {
    this.config = {
      title: 'Banners Creator',
      footer: '© Artur Babkiewicz build in Angular',
      date: new Date()
    };
  }

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }

  setLayout(selectedLayout: string) {
    Object.keys(this.layout).forEach(key => (this.layout[key] = false));
    this.layout[selectedLayout] = true;
  }

  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then(blob => saveAs(blob));
  }
}
