import { Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Category} from "../models/category";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private toastr :ToastrService) { }

  saveData(data : Category) {
    console.log(data);
    this.toastr.success("Data Saved Successfully");
  }
  updateData(data : Category) {
    console.log(data);
    this.toastr.success("Data Updated Successfully");
  }
}
