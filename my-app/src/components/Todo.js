import React, { Component, PropTypes } from 'react'


export default class Todo extends Component {
   render() {
      return (
         <div> 
         <li>
            {this.props.data.ProductName}
         </li>
         <li>
            {this.props.data.Quantity}
         </li>
       </div>
      )
   }
}