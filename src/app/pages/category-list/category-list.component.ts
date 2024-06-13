import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  searchTerm: string = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      this.filteredCategories = data;
    });
  }
}
