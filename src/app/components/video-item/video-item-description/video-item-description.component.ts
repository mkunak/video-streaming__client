import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-item-description',
  templateUrl: './video-item-description.component.html',
  styleUrls: ['./video-item-description.component.css']
})
export class VideoItemDescriptionComponent {
  @Input() descriptionText = '';
}
