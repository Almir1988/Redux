import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo,logIn } from './actions/actions'
import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'
import SignIn from './components/SignIn.js'
import UserList from './components/UserList.js'

class App extends Component {
   render() {
      const { dispatch, visibleTodos, visibleUser } = this.props
      return (
         <div>
            <AddTodo onAddClick = {Product =>dispatch(addTodo(Product))} />
            <TodoList todos = {visibleTodos}/>
            <SignIn onAddClick={User=>dispatch(logIn(User))} />
            <UserList users = {visibleUser}/>
         </div>
      )
   }
}
function select(state) {
  
   return {
    visibleTodos: state.todos
 }
}
function select2(state)
{
    return {

        visibleUser: state.users
    }
}


export default connect({select},{select2})(App);