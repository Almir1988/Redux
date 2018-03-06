import React, { Component, PropTypes } from 'react'
import './style.css'
export default class AddTodo extends Component {
   render() {
      return (
         <div className="pos">
            <input type = 'ProductName' ref = 'input' /><br/>
            <input type = 'Quantity' ref = 'input2' /><br/>
            <button onClick = {(e) => this.handleClick(e)}>
               Add Product
            </button>
         </div>
      ) 
   }
// 
   handleClick(e) {
    const node = this.refs.input
    const node2=this.refs.input2
    const ProductName = node.value.trim()
    const Quantity=node2.value.trim()
    const Prod=[ProductName,Quantity]
    this.props.onAddClick(Prod)
    node.value = ''
    node2.value=''
   }
}