import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IScreenshotsResponse, IVideoListResponse } from 'src/app/Video.model';
import { IPostItem } from '../posts/post-item/post.model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  videoList: IVideoListResponse;
  screenshots: IScreenshotsResponse;

  @Output() onGetPosts = new EventEmitter<IPostItem[]>();

  constructor(
    private http: HttpClient,
    private config: AppConfigService,
  ) {}

  fetchScreenshotsData() {
    this.http
      .get(`${this.config.serverBaseUrl}/api/screenshots`)
      .subscribe((response) => {
        this.videoList = response as IScreenshotsResponse;
      });
  }
}
