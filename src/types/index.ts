export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'drinks' | 'food' | 'desserts';
  sizes?: {
    small?: number;
    medium?: number;
    large?: number;
  };
}

export interface CartItem {
  product: Product;
  size: 'small' | 'medium' | 'large';
  quantity: number;
}
