import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  permalink: string = '';
  imgSrc: string ;
  onTitleChange($event : any) {

    const title = $event.target.value;
    this.permalink = title.replace(/\s/g,'-');
    console.log(this.permalink)
  }
}
