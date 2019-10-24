import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';


@NgModule({
  declarations: [BlogpostFeaturedComponent, BlogpostListComponent, BlogpostDetailComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ]
})
export class BlogpostModule { }
