import { combineReducers } from 'redux'
import { ADD_TODO ,LOGIN_USER} from '../actions/actions'

function todos(state = [], action) {
   switch (action.type) {
      case ADD_TODO:
         return [
            ...state,
            action.Product 
         ]
      default:
         return state
   }
}
function users(state = [], action) {
      switch (action.type) {
      
       case LOGIN_USER:
            return [
               ...state,
               action.User
            ]
         default:
            return state
      }
   }
const todoApp = combineReducers({
      todos,
      users
})

export {todoApp}