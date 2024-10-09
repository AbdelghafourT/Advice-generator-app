import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  private apiUrl = 'https://api.adviceslip.com/advice'
  constructor(private http: HttpClient) { }

  getAdvice(){
    return this.http.get(this.apiUrl)
  }
}
