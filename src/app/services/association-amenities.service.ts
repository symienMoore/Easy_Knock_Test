import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AssociationAmenitiesService {

  constructor(private http: HttpClient) { }
  url = 'https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21';

  getData() {
    return this.http.get(this.url);
  }
}
