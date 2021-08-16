import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  GetDestinationService(value?:any)
  {
   
    return this.http.get('https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations?search_type=city_or_country&search_value='+value);
  }

  GetDestinationDetailsService(id:any)
  {
  
    return this.http.get('https://devapi.luckytrip.co.uk/api/2.0/top_five/destination?id='+id);

  }
}
