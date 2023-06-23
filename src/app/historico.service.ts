import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient) { }

  private link ="https://allramos.github.io/desenvolvimento-web/lista-reservas.json"

  requisition(): Observable<any>{
    return this.http.get<any>(this.link)
  }

}
