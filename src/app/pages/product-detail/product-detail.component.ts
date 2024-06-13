import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ProductService.getProduct(id).subscribe((data: Product) => {
      this.product = this.filterValidProduct(data);
    });
  }

  getSafeUrl(url: string): SafeUrl {
    if (this.isValidUrl(url)) {
      const cleanUrl = url.replace(/['"%\[\]]/g, ''); // Remove caracteres indesejados
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

  filterValidProduct(product: Product): Product | undefined {
    if (product.title && product.description && product.images && product.images.length > 0) {
      return product;
    }
    return undefined;
  }
}
