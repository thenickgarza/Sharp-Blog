import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface Article {
    articleId: number;
    title: string;
    content: string;
    comments: Comment[];
}

export interface Comment {
    id: number;
    content: string;
    articleId: number;
}

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    http = inject(HttpClient)
    url = 'http://localhost:5000/api/articles';

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(this.url);
    }

    createArticle(article: Article) {
        return this.http.post(this.url, article);
    }


}