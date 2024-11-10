import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pack } from '../models/Pack'; // Import your entity models
import { Activity } from '../models/Activity'; // Import your entity models

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'http://localhost:8081/pack'; // Assuming your Spring Boot app runs on port 8082

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/hello`);
  }

  getAllPackages(): Observable<Pack[]> {
    return this.http.get<Pack[]>(`${this.apiUrl}/getAllPacks`);
  }

  addPack(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(`${this.apiUrl}/addPack`, pack);
  }

  updatePack(id: number, pack: Pack): Observable<Pack> {
    return this.http.put<Pack>(`${this.apiUrl}/update/${id}`, pack);
  }

  deletePack(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletePack/${id}`);
  }

  findPacksByPriceAndDuration(
    minPrice: string,
    maxPrice: string,
    minDuration: string,
    maxDuration: string
  ): Observable<Pack[]> {
    return this.http.get<Pack[]>(
      `${this.apiUrl}/search?minPrice=${minPrice}&maxPrice=${maxPrice}&minDuration=${minDuration}&maxDuration=${maxDuration}`
    );
  }

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/activities`);
  }

  addActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.apiUrl}/addActivity`, activity);
  }

  updateActivity(id: number, activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(`${this.apiUrl}/updateActivity/${id}`, activity);
  }

  deleteActivity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteActivity/${id}`);
  }

  findPacksByActivityId(activityId: number): Observable<Pack[]> {
    return this.http.get<Pack[]>(`${this.apiUrl}/packsByActivity/${activityId}`);
  }

  addActivityToPack(packId: number, activityId: number): Observable<Pack> {
    return this.http.post<Pack>(`${this.apiUrl}/addActivityToPack/${packId}/${activityId}`, null);
  }

  getPacksWithActivityDetails(): Observable<Pack[]> {
    return this.http.get<Pack[]>(`${this.apiUrl}/packsWithActivities`);
  }
}