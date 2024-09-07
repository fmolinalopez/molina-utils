import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-decode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './url-decode.component.html',
  styleUrl: './url-decode.component.css'
})

export class UrlDecodeComponent {
  encode : boolean = true;
  originStr : string = '';
  resultStr : string = '';

  changeEncodeType() {
    this.encode = !this.encode;
    console.log(this.originStr);
  }

  encodeString() {
    this.resultStr = encodeURIComponent(this.originStr);
  }

  decodeString() {
    this.resultStr = decodeURIComponent(this.originStr);
  }
}

