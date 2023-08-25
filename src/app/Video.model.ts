export class VideoItem {
  id?: string;
  index?: number;
  name?: string;
  description?: string;
  size?: number;
  sizeUnit?: string;
  duration?: number;
  durationUnit?: string;
  dotExtension?: string;
  resolution?: number;
  screensaver?: string;
}

export class ScreenshotItem {
  id?: string;
  name?: string;
  dotExtension?: string;
  resolution?: number;
  videoItem: string;
}

export interface IVideoListResponse {
  data: VideoItem[],
  totalLength: number,
}

export interface IScreenshotsResponse {
  data: ScreenshotItem[],
  totalLength: number,
}

export interface ICreateScreenshotResponse {
  success: boolean,
  created: boolean,
  data: ScreenshotItem,
}

export interface IDeleteScreenshotResponse {
  success: boolean,
  data: Record<string, unknown>,
}
