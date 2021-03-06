import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'



//tako da unutar Todo imas props.data u kojem imas name i quantity i u todo se poziva this.props.data.ProductName
//i this.props.data.Quantity jer on ovdje mapira todo i dodjeljuje data sve todo-e
export default class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todos.map((todo , i) =>
               <Todo
                  key = {i} 
                  data={todo}
               />
            )}
         </ul>
      )
   }
}