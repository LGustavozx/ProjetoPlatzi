import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/product';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.categoryService.getCategory(id).subscribe((data: Category) => {
      this.category = data;
    });
  }

  getSafeUrl(url: string): SafeUrl {
    if (this.isValidUrl(url)) {
      const cleanUrl = url.replace(/['"%\[\]]/g, '');
      return this.sanitizer.bypassSecurityTrustUrl(cleanUrl);
    }
    return this.sanitizer.bypassSecurityTrustUrl('https://via.placeholder.com/150?text=Image+Not+Found');
  }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  goBack(): void {
    this.router.navigate(['/categories']);
  }
}
