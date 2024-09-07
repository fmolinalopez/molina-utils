import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import xmlFormat from 'xml-formatter';

@Component({
  selector: 'app-xml-formatter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './xml-formatter.component.html',
  styleUrl: './xml-formatter.component.css'
})
export class XmlFormatterComponent {

  originXml : string = '';
  resultXml : string = '';

  formatXml() {
    try {
      this.resultXml = xmlFormat(this.originXml);
    } catch(e) {
      this.resultXml = String(e);
    }
  }
}
