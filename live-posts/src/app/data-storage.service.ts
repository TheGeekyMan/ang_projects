import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import {Post} from './post.model';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private postService: PostService , private http: HttpClient){}
    storeData(){
        //get list of objects
        const listOfPosts: Post[]=this.postService.getPosts();

        //store list of oblects in DB
        this.http.put('https://live-posts-fbdd5.firebaseio.com/posts.json',listOfPosts).subscribe((res)=>{console.log(res)});
    }

    fetchData(){    
        this.http.get('https://live-posts-fbdd5.firebaseio.com/posts.json').pipe(tap((posts: Post[])=>{
            console.log(posts);
            this.postService.setPosts(posts);
        })).subscribe();
    }
}