import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() { }

  storeData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  getData(key: string): any {
    return !!localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : null;
  }
}
