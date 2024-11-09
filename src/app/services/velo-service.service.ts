// src/app/services/velo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeloService {
  private baseUrl = 'http://localhost:8097/api/velo';


  constructor(private http: HttpClient) { }

  // Fetch all velos
  afficherVelos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }
  // Add a new velo
  ajouterVelo(velo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, velo);
  }
  afficherVeloParId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/velo/${id}`);
  }

  // Update a velo
  modifierVelo(id: number, velo: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, velo);
  }

  // Delete a velo
  supprimerVelo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
