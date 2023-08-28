import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { VideoItemPageComponent } from './pages/video-item-page/video-item-page.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoItemScreenshotsComponent } from './components/video-item/video-item-screenshots/video-item-screenshots.component';
import { VideoItemDescriptionComponent } from './components/video-item/video-item-description/video-item-description.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/posts/post-item/post-item.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

import { VideoItem } from './Video.model';
import { AppConfigService } from './services/app-config.service';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'item/:id', component: VideoItemPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VideoItemComponent,
    NavbarComponent,
    HomePageComponent,
    VideoItemPageComponent,
    VideoItemScreenshotsComponent,
    VideoItemDescriptionComponent,
    PostsComponent,
    PostItemComponent,
    ControlPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    VideoItem,
    { 
      provide : APP_INITIALIZER, 
      multi : true, 
       deps : [AppConfigService], 
       useFactory : (appConfigService : AppConfigService) => async () => await appConfigService.loadAppConfig(),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
