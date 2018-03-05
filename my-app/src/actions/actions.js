export const ADD_TODO = 'ADD_TODO'


export function addTodo(ProductName,Quantity) {
   return {
      type: ADD_TODO,
      ProductName,
      Quantity
   };
}