import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
   render() {
      return (
         <div> 
         <li>
            {this.props.ProductName}
         </li>
         <li>
            {this.props.Quantity}
         </li>
       </div>
      )
   }
}