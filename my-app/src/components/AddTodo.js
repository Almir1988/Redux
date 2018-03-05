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
         </div>llllll
      ) 
   }
   handleClick(e) {
      const node = this.refs.input
      const ProductName = node.value.trim()
      const Quantity=node.value.trim()
      const Prod={
          
         ProductName:this.ProductName,
         Quantity:this.Quantity
         
      }
      this.props.onAddClick(Prod)
      node.value = ''
   }
}