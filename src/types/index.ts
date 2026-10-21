export type ProductCategory = 
  | 'all'
  | 'suits'
  | 'blazers'
  | 'casual'
  | 'pants'
  | 'shoes-accessories';

export interface Product {
  id: string;
  name: string;
  arabicName?: string;
  category: ProductCategory;
  categoryLabel: string;
  priceUSD: number;
  badge?: string;
  fabric: string;
  fit: string;
  description: string;
  sizes: string[];
  colors: string[];
  imagePlaceholder: {
    title: string;
    subtitle: string;
    bgGradient: string;
    accentColor: string;
    silhouetteType: 'suit' | 'blazer' | 'shirt' | 'shoes' | 'pants' | 'tuxedo' | 'accessories';
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'suits' | 'grooms' | 'casual' | 'details';
  categoryLabel: string;
  description: string;
  silhouetteType: 'suit' | 'blazer' | 'shirt' | 'shoes' | 'tuxedo' | 'accessories';
  bgGradient: string;
  accentColor: string;
}

export interface InquiryItem {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
}
