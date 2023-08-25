import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { VideoItem } from 'src/app/Video.model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-video-item-page',
  templateUrl: './video-item-page.component.html',
  styleUrls: ['./video-item-page.component.css']
})
export class VideoItemPageComponent implements OnInit {
  selectedItem: VideoItem;
  sourceUrl: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private config: AppConfigService,
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchVideoItemData(id);
  }

  fetchVideoItemData(id: string) {
    this.http
      .get(`${this.config.serverBaseUrl}/api/video-item/${id}`)
      .subscribe((data) => {
        this.selectedItem = Object.assign(new VideoItem(), data);
      });
  }
}
