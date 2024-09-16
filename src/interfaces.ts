export interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    categoryId: string;
    quantity: number;
}
  
export interface ICategory {
    id: string;
    name: string;
    description: string;
}
  
export interface IUser {
    id: string;
    username: string;
    password: string;
    email: string;
    role: 'admin' | 'manager' | 'user';
}
  
export interface IOrder {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    totalPrice: number;
    orderDate: Date;
}
  