import { Component, OnInit, isDevMode } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(
    private titleService: Title,
    private config: AppConfigService,
  ) {
    this.title = this.config.appTitle;
    this.titleService.setTitle(this.config.appTitle);
  }

  ngOnInit(): void {
    if (isDevMode()) {
      console.info('development environment is running...');
    }
  }
}
