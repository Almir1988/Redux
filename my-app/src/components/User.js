import React, { Component, PropTypes } from 'react'


export default class User extends Component {
   render() {
      return (
         <div> 
         <li>
            <h1>WELLCOME
            {this.props.data.username}
            </h1>
         </li>
       </div>
      )
   }
}