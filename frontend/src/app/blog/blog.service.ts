import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Article {
    id: number;
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

    getArticles() {
        return this.http.get(this.url);
    }

}