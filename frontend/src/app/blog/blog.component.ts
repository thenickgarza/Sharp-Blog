import { Component, inject } from '@angular/core';
import { BlogService } from './blog.service';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})

export class Blog {

  private blogService = inject(BlogService);

  getArticles() {
  return this.blogService.getArticles().subscribe({
    next: (value) => console.log("hello", value),
    error: (error) => console.error("error", error)
  })
}
  ngOnInit() {
    this.getArticles();
  }
};
