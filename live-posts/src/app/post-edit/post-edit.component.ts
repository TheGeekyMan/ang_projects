import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  index: number;
  editMode = false;

  constructor(private postService: PostService , private routerService: Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let title = '';
    let desc = '';
    let imagePath = '';

    //get route parameters
    this.route.params.subscribe((params: Params)=>{
      if(params['index']){
        this.editMode=true;

      this.index = +params['index'];

      const post : Post = this.postService.getPost(this.index);
      title = post.title;
      desc = post.desc;
      imagePath = post.imagePath;
      }
    });

    //create form a ref
    this.postForm = new FormGroup({
      title : new FormControl(title,Validators.required),
      desc : new FormControl(desc,[Validators.required, Validators.minLength(10)]),
      imagePath : new FormControl(imagePath,Validators.required)
    }); 
    }

    onSubmit(){
      console.log(this.postForm);
      let title = '';
      let desc = '';
      let imagePath = '';
      
      //fetch data from form
      title = this.postForm.value.title;
      desc = this.postForm.value.desc;
      imagePath = this.postForm.value.imagePath;

      //new object
      const post: Post = new Post(title,desc,imagePath,'test@test.com',new Date());


      //send data to post.service
      if(this.editMode){
        this.postService.updatePost(this.index,post)
      }
      else{
        this.postService.addPost(post);
      }
      

      //NAvigate
      this.routerService.navigate(['post-list']);
    }
      onCancel(){
        //NAvigate
      this.routerService.navigate(['post-list']);

      
    }

}
