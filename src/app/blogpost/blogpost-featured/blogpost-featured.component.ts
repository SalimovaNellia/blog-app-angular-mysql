import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import {BlogpostService} from '../blogpost.service';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  blogs: Blogpost;
  error: {};

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.blogpostService.getFeaturedBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }

}
