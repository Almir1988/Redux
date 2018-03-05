export const ADD_TODO = 'ADD_TODO'


export function addTodo(ProductName) {
   return {
      type: ADD_TODO,
      ProductName
   };
}