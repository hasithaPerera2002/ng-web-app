import {Component} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  permalinkModel: string = '';
  imgSrc: any = './assets/placeholder-image.png';
  selectedImage: any;
  postForm: FormGroup;


  constructor(private categoriesService: CategoriesService, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      permalink: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      postImage: ['', Validators.required],
      content: ['', Validators.required],
    })
    this.postForm.get('permalink')?.disable();
  }

  get fc() {
    return this.postForm.controls;
  }

  onTitleChange($event: any) {

    const title = $event.target.value;
    this.permalinkModel = title.replace(/\s/g, '-');
    console.log(this.permalinkModel)
  }

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
      console.log(e.target?.result)
    }
    reader.readAsDataURL($event.target?.files[0]);
    this.selectedImage = $event.target?.files[0];
  }

  onSubmit() {
    const postData: Post = {
      title: this.postForm.get('title')?.value,
      permalink: this.permalinkModel,
      excerpt: this.postForm.get('excerpt')?.value,
      category: {
        id: this.postForm.get('category')?.value,
        category: this.postForm.get('category')?.value
      },
      content: this.postForm.get('content')?.value,
      isFeatured: false,
      viewCount: 0,
      status: 'published',
      postImagePath: this.selectedImage,
      createdAt: new Date()
    }
  }
}
