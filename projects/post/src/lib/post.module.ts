import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComponent
      }
    ])
  ],
  exports: [PostComponent]
})
export class PostModule {}
