import { ReactNode } from 'react';

export type ROUTE = {
  name: string;
  title: string;
  element: ReactNode;
  path: string;
  index?: boolean;
};

export type Product = {
  id: number;
  name: string;
  totalPrice?: number;
  price: number;
  image: string;
  description: string;
};
