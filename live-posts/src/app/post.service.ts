import { Injectable } from '@angular/core';
import { Post } from './post.model';
import {Subject} from 'rxjs';


@Injectable({providedIn:'root'})
export class PostService{
  listChanged = new Subject<Post[]>()

    listOfPosts: Post[] = [
        // new Post('World Ocean Day',
        // `An ocean is a body of water that composes much of a planet's hydrosphere. On Earth, an ocean is one of the major conventional divisions of the World Ocean. These are, in descending order by area, the Pacific, Atlantic, Indian, Southern, and Arctic Oceans`,
        // 'https://www.ecomagazine.com/images/Newsletter/0_2019/Week_11-18-19/birdseyeview_ocean.jpg',
        // 'test@test.com',
        // new Date()
        // ),
    
        // new Post('Nature wonder',
        // `Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication Nature features peer-reviewed research from a variety of academic disciplines, mainly in science, technology, and the natural sciences`,
        // 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84',
        // 'test@test.com',
        // new Date()
        // ),
    
        // new Post('Cricket',
        // `Real Cricket™ is here and here to stay! For the first time, we bring to you our hit cricket franchise and rich cricketing experience with Real Cricket™ 20! The most ...`,
        // 'https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/09/24/Pictures/file-photo-pakistan-cricket-world-cup-india_baa3875a-de87-11e9-93be-d8edb8f85faf.jpg',
        // 'test@test.com',
        // new Date()
        // ),
    
        // new Post('River',
        // `A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases a river flows into the ground`,
        // 'https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/100819_JL_groundwater_feat-1028x579.jpg',
        // 'test@test.com',
        // new Date()
        // ),
      ];

      getPosts(){
          return this.listOfPosts;
      }

      addPost(post:Post){
        this.listOfPosts.push(post);
      }

      deletePost(index:number){
          this.listOfPosts.splice(index,1);
      }
      
      updatePost(index:number,post:Post){
        this.listOfPosts[index] = post;
      }

      getPost(index:number){
        return this.listOfPosts[index];
      }

      setPosts(posts: Post[]){
        this.listOfPosts = posts;
        this.listChanged.next(this.listOfPosts);  
      }
}