import { Routes } from '@angular/router';
import { UrlDecodeComponent } from './components/url-decode/url-decode.component';
import { XmlFormatterComponent } from './components/xml-formatter/xml-formatter.component';

export const routes: Routes = [
  {path: 'urlDecode', component: UrlDecodeComponent},
  {path: 'xmlFormatter', component: XmlFormatterComponent}
];
