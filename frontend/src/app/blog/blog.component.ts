import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BlogService } from './blog.service';
import { tap } from 'rxjs/internal/operators/tap';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Article } from './blog.service';

@Component({
  selector: 'app-blog',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})

export class Blog {
  private blogService = inject(BlogService);
  private fb = inject(FormBuilder);

  articles$ = this.blogService.getArticles()

  articleForm: FormGroup = this.fb.group({
    title: [''],
    content: [''],
  });

  createArticle() {
    this.blogService.createArticle(this.articleForm.value).subscribe({
      next: (value) => console.log('Article created', value),
      error: (error) => console.error('Error creating article', error),
      complete: () => console.log('Create article request complete'),
    })
  }

  // getArticles() {
  //   return this.blogService.getArticles()
  //   .pipe(tap(article => this.articleList = article as Article []))
  //   .subscribe({
  //     error: (error) => console.error('error', error),
  //     complete: () => console.log('Articles fetched successfully'),
  //   });
  // }

}
