import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';


@NgModule({
  declarations: [BlogpostFeaturedComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ]
})
export class BlogpostModule { }
