import React, { Component, PropTypes } from 'react'
import './style.css'
export default class SignIn extends Component {
   render() {
      return (
         <div className="pos">
            <input type = 'username' ref = 'input' /><br/>
            <input type = 'password' ref = 'input2' /><br/>
            <button onClick = {(e) => this.handleClick(e)}>
               Sign In
            </button>
         </div>
      ) 
   }
// 
   handleClick(e) { 
    const node = this.refs.input
    const node2=this.refs.input2
    const username = node.value.trim()
    const password=node2.value.trim()
    console.log(username)
    console.log(password)

    const user={

        username:username,
        password:password
    }

    this.props.onAddClick(user)
    console.log(user)
    node.value = ''
    node2.value=''
   }
}