import React, { Component, PropTypes } from 'react'
import './style.css'
export default class AddTodo extends Component {
   render() {
      return (
         <div className="pos">
            <input type = 'ProductName' ref = 'input' /><br/>
		    <input type = 'Quantity' ref = 'input' /><br/>
            <button onClick = {(e) => this.handleClick(e)}>
               Add Product
            </button>
         </div>
      ) 
   }
   handleClick(e) {
      const node = this.refs.input
      const Product = node.value.trim()
      this.props.onAddClick(Product)
      node.value = ''
   }
}