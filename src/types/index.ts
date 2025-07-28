import { ReactNode } from 'react';

export type ROUTE = {
  name: string;
  title: string;
  element: ReactNode;
  path: string;
  index?: boolean;
};

export interface Product {
  id: number;
  name: string;
  totalPrice?: number; // Optional for nested products
  price: number;
  image: string;
  description: string;
  productList?: Product[]; // Optional for nested products
}

export interface CartItem extends Product {
  quantity: number;
}
