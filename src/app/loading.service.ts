import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = false;

  constructor() { }

  showLoading(){
    this.isLoading = true;
  }

  hideLoading(){
    this.isLoading = false;
  }
}
