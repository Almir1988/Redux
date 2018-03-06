export const ADD_TODO = 'ADD_TODO'


export function addTodo(Product) {
  
   return {
      type: ADD_TODO,
      Product
   };
}