import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs';

type TConfig = {
  appTitle?: string;
  serverBaseUrl?: string;
  clientBaseUrl?: string;
  environment?: string;
  serverPort?: string;
  clientPort?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig = {} as TConfig;
  
  constructor(private http: HttpClient) {}

  async loadAppConfig() {
    return new Promise((resolved, rejected) => {
      this.http.get('/assets/config/app-config.json')
        .subscribe((localAppConfig: any) => {
          console.log('>>> localAppConfig:', localAppConfig);
          this.appConfig = { ...localAppConfig };
          this.appConfig.serverBaseUrl = import.meta.env.NG_APP_SERVER_BASE_URL;
          this.appConfig.clientBaseUrl = import.meta.env.NG_APP_CLIENT_BASE_URL;
          this.appConfig.environment = import.meta.env.NG_APP_ENV;
          this.appConfig.serverPort = import.meta.env.NG_APP_SERVER_PORT;
          this.appConfig.clientPort = import.meta.env.NG_APP_CLIENT_PORT;

          resolved(this.appConfig);
        });
    });
  }

  get serverBaseUrl() : string {
    return this.appConfig.serverBaseUrl!;
  }

  get clientBaseUrl() : string {
    return this.appConfig.clientBaseUrl!;
  }

  get environment() : string {
    return this.appConfig.environment!;
  }

  get appTitle() : string {
    return this.appConfig.appTitle!;
  }
}
