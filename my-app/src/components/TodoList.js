import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'

export default class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todos.map((todo, i) =>
               <Todo
                  key = {i}
                  Product={todo}
               />
            )}
         </ul>
      )
   }
}
