import { Component, Input } from '@angular/core';

import { VideoItem } from 'src/app/Video.model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent {
  @Input() public selectedItem: VideoItem;
  currentTime = 0;

  constructor(private config: AppConfigService) {}

  getVideoItemSource() {
    return `${this.config.serverBaseUrl}/api/video/${this.selectedItem.id}`;
  }

  setCurrentTime(data: any) {
    this.currentTime = data.target!.currentTime;
    console.log('>>> VideoItemComponent > current time:', this.currentTime);
  }
}
