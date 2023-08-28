import { Component, Input } from '@angular/core';

import { IPostItem } from './post-item/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() posts: IPostItem[];
}
