export const ADD_TODO = 'ADD_TODO'


class Product {
    constructor(ProductName, Quantity) {
      this.ProductName = ProductName;
      this.Quantity = Quantity;
    }
  }

export function addTodo(Product) {
   return {
      type: ADD_TODO,
      Product
   };
}