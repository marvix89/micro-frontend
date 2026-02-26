import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from './config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfig | null = null;

  constructor(private http: HttpClient) {}

  public async loadConfig(): Promise<void> {
    try {
      this.config = await firstValueFrom(this.http.get<AppConfig>('/config.json'));
    } catch (err) {
      console.warn('Failed to load /config.json. Defaulting to empty config.', err);
      this.config = {
        reactMfeUrl: 'http://localhost:4202/remoteEntry.js',
        angularMfeUrl: 'http://localhost:4201/remoteEntry.js'
      };
    }
  }

  public getConfig(): AppConfig {
    if (!this.config) {
      throw new Error('Config not loaded!');
    }
    return this.config;
  }
}
