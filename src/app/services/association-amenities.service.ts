import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AssociationAmenitiesService {

  constructor(private http: HttpClient) { }
  url = 'https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21';

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  getByAmenity(amenity: String): Observable<any> {
    return this.http.get(this.url);
  }
}
