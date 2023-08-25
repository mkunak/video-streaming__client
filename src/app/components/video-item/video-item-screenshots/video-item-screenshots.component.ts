import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ICreateScreenshotResponse, IDeleteScreenshotResponse, IScreenshotsResponse, ScreenshotItem, VideoItem } from 'src/app/Video.model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-video-item-screenshots',
  templateUrl: './video-item-screenshots.component.html',
  styleUrls: ['./video-item-screenshots.component.css']
})
export class VideoItemScreenshotsComponent implements OnInit {
  screenshots: ScreenshotItem[] = [];
  @Input() selectedItem: VideoItem;
  @Input() timemark: number;

  constructor(
    private http: HttpClient,
    private config: AppConfigService,
  ) {}

  ngOnInit(): void {
    this.getScreenshotsByVideoItemId(this.selectedItem.id!);
  }

  getVideoItemScreenshotsSource(screenshot: ScreenshotItem): string {
    return `${this.config.serverBaseUrl}/screenshots/${screenshot.name}${screenshot.dotExtension}`;
  }

  getScreenshotsByVideoItemId(id: string) {
    this.http.get(`http://localhost:9000/api/screenshots/${id}`)
      .subscribe((data) => {
        this.screenshots = ((data as IScreenshotsResponse).data);
      });
  }

  handleMakeScreenshot() {
    this.http.post('http://localhost:9000/api/screenshot', {
      name: this.selectedItem.name,
      dotExtension: this.selectedItem.dotExtension,
      timemark: this.timemark,
      videoItem: this.selectedItem.id,
    })
      .subscribe((data) => {
        if ((data as ICreateScreenshotResponse).created) {
          this.screenshots.push((data as ICreateScreenshotResponse).data);
        }
      });
  }

  handleDeleteScreenshot(screenshotData: ScreenshotItem) {
    this.http.delete('http://localhost:9000/api/screenshot', {
      body: {
        name: screenshotData.name,
        dotExtension: screenshotData.dotExtension,
        id: screenshotData.id,
      }
    })
      .subscribe((data) => {
        if ((data as IDeleteScreenshotResponse).success) {
          this.screenshots = [...this.screenshots.filter((screenshot) => screenshot.id !== screenshotData.id)];
        }
      });
  }
}
