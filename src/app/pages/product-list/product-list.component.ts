import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  loading = false;

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = this.filterValidProducts(data);
      this.filteredProducts = this.products;
    });
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
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

  filterValidProducts(products: Product[]): Product[] {
    const uniqueProductMap = new Map<number, Product>();

    products.forEach(product => {
      if (product.title && product.description && product.images && product.images.length > 0) {
        uniqueProductMap.set(product.id, product);
      }
    });

    return Array.from(uniqueProductMap.values());
  }

  truncateDescription(description: string): string {
    if (description.length > 175) {
      return description.substring(0, 100 ) + '...';
    }
    return description;
  }
}
