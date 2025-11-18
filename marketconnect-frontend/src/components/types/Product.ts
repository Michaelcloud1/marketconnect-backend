export interface Product {
  id: string;
  title: string;
  price: number;
  qty: number;
  images: string[];
  description: string;
  ownerId?: string;
}

