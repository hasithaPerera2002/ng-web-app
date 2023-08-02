import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategoriesService} from "../services/categories.service";
import {Category} from "../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  formCategory!:string;
  formStatus: string="Add";

  constructor(private categoryService: CategoriesService) {

  }


  addCategory(categoryForm:  NgForm) {
    if (this.formStatus == "Add") {
      let categoryData:Category ={ category: categoryForm.value.category}
      this.categoryService.saveData(categoryData)
    }else {
      let categoryData:Category ={ category: categoryForm.value.category}
      this.categoryService.updateData(categoryData)
      this.formStatus="Add";
    }
  }

  ngOnInit() : void {

  }

  onEdit() {
    this.formStatus="Edit";
  }

  onDelete() {

  }
}
