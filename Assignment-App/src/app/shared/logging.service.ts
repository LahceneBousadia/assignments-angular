import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  niveauDeLog = 0; // 0 = on ne loggue rien, 1 : on loggue des message,
  // 2 : on loggue en rouge, etc...

  constructor() {}

  log(nom: string, action: string) {
    if (this.niveauDeLog > 0)
      console.log('Loggin service : ' + nom + ' ' + action);
  }

  setLogLevel(level: number) {
    this.niveauDeLog = level;
  }
}
