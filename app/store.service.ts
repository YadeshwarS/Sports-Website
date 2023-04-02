import { Injectable } from '@angular/core';
export interface Student {
  id: string,
  playername: string,
  schoolname: string,
  sportsname: string,
  date: string
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
}
