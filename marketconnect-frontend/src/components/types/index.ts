// src/types/index.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role: "business" | "marketer";
}

export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  qty: number;
  images?: string[];
  ownerId: string;
}

export interface Order {
  id: string;
  items: { productId: string; qty: number }[];
  total: number;
  shipping: any;
  status: "pending" | "paid" | "shipped" | "completed";
}

export interface Message {
  id: string;
  from: string;
  to: string;
  text?: string;
  attachments?: string[];
  createdAt: string;
}
