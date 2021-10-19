import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  openFile(fileLocation: string) {
    return this.httpClient.get(fileLocation, {
      responseType: 'arraybuffer'
    }).subscribe(response => {
      const file = new Blob([response], {type: 'application/pdf'});
      const fileURL = window.URL.createObjectURL(file);
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, fileURL.split(':')[1] + '.pdf');
      } else {
        window.open(fileURL);
      }
    });
  }
}
