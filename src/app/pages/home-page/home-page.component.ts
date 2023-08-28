import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPostItem } from 'src/app/components/posts/post-item/post.model';
import { IVideoListResponse } from 'src/app/Video.model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts: IPostItem[] = [];

  constructor(private http: HttpClient, private config: AppConfigService) {}

  ngOnInit(): void {
    this.onFetchVideoListData();
  }

  onFetchVideoListData() {
    console.log('>>> onFetchVideoListData > url:', `${this.config.serverBaseUrl}/api/video-list`);

    this.http
      .get(`${this.config.serverBaseUrl}/api/video-list`)
      .subscribe((response) => {
        this.posts = (response as IVideoListResponse).data.map((videoItem) => {
          return {
            name: videoItem.name!,
            screensaver: videoItem.screensaver!,
            videoItem: videoItem.id!,
            description: videoItem.description ? videoItem.description : '',
          };
        });
      });
  }
}
