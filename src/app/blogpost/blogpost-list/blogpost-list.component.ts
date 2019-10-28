import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';
import {BlogpostService} from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title = 'Blogs';
  blogs: Blogpost;
  error: {};

  constructor(private titleService: Title,
              private blogpostService: BlogpostService) {

  }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.blogpostService.getBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }

}
