import React, { Component, PropTypes } from 'react'
import User from './User.js'



//tako da unutar Todo imas props.data u kojem imas name i quantity i u todo se poziva this.props.data.ProductName
//i this.props.data.Quantity jer on ovdje mapira todo i dodjeljuje data sve todo-e
export default class UserList extends Component {
   render() {
      return (
         <ul>
            {this.props.user.map((user , i) =>
               <User
                  key = {i} 
                  data={user}
               />
            )}
         </ul>
      )
   }
}