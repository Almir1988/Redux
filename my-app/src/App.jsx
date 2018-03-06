import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'

class App extends Component {
   render() {
      const { dispatch, visibleTodos } = this.props
      
     
      return (
         <div>
            <AddTodo onAddClick = {Product =>dispatch(addTodo(Product))} />
            <TodoList todos = {visibleTodos}/>
         </div>
      )
   }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(App);