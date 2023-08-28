import { Component, Input } from '@angular/core';

import { IPostItem } from './post.model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() post: IPostItem;

  constructor(private config: AppConfigService) {}

  getScreensaverSource() {
    const screensaverSrc = `${this.config.serverBaseUrl}/screensavers/${this.post.screensaver}`;
    return screensaverSrc;
  }
}
